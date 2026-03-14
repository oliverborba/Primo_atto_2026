import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.REVIEWS_PORT || 8787;
const CACHE_TTL_MS = Number(process.env.REVIEWS_CACHE_TTL_MS || 10 * 60 * 1000);

let cache = {
  timestamp: 0,
  payload: null
};

const getLocationName = () => {
  const locationName = process.env.GOOGLE_BUSINESS_LOCATION_NAME;
  if (locationName) return locationName;

  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;
  if (accountId && locationId) {
    return `accounts/${accountId}/locations/${locationId}`;
  }

  return null;
};

const getAccessToken = async () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Google OAuth credentials');
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  const tokenResponse = await oauth2Client.getAccessToken();
  const accessToken = tokenResponse?.token;
  if (!accessToken) throw new Error('Unable to obtain access token');
  return accessToken;
};

const fetchReviewsFromGoogle = async () => {
  const locationName = getLocationName();
  if (!locationName) throw new Error('Missing location name');

  const accessToken = await getAccessToken();
  const url = `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=200&orderBy=updateTime desc`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google API error: ${response.status} ${text}`);
  }

  const data = await response.json();
  const reviews = Array.isArray(data.reviews) ? data.reviews : [];

  const mapped = reviews.map((review) => ({
    nome: review.reviewer?.displayName || review.reviewer?.name || 'Cliente',
    texto: review.comment || '',
    tempo: review.updateTime || review.createTime || 'recentemente',
    rating: review.starRating ? Number(review.starRating) : review.rating || 5
  }));

  const ratingFromApi = typeof data.averageRating === 'number' ? data.averageRating : null;
  const totalFromApi = typeof data.totalReviewCount === 'number' ? data.totalReviewCount : null;

  const computedRating = mapped.length
    ? Number(
        (mapped.reduce((sum, r) => sum + (typeof r.rating === 'number' ? r.rating : 5), 0) / mapped.length).toFixed(1)
      )
    : null;

  return {
    rating: ratingFromApi ?? computedRating,
    totalReviews: totalFromApi ?? mapped.length,
    reviews: mapped
  };
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/reviews', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.payload && now - cache.timestamp < CACHE_TTL_MS) {
      return res.json(cache.payload);
    }

    const payload = await fetchReviewsFromGoogle();
    cache = { timestamp: now, payload };
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to fetch reviews',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Reviews API running on http://localhost:${PORT}`);
});
