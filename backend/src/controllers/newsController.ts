import axios from 'axios';
import { Request, Response } from 'express';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';  // News API base URL
const API_KEY = process.env.NEWS_API_KEY || 'your-news-api-key';  // Your News API key from environment variables

// Controller function to fetch news by category
export const fetchNewsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ message: 'Category is required' });
  }

  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        category: category,  // Pass the category to the API
        apiKey: API_KEY,      // API key for authentication
      },
    });

    // Send the news articles back in the response
    res.json({ articles: response.data.articles });
  } catch (error) {
    // Handle error if the external API call fails
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Failed to fetch news. Please try again later.' });
  }
};
