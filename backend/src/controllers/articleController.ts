import axios from 'axios';
import { Request, Response } from 'express';

const fetchNews = async (category: string) => {
    const { NEWS_API_BASE_URL, NEWS_API_KEY } = process.env;
    if (!NEWS_API_BASE_URL || !NEWS_API_KEY) {
        throw new Error('API credentials are missing');
    }

    try {
        const url = `${NEWS_API_BASE_URL}/top-headlines?country=in&category=${category}&apiKey=${NEWS_API_KEY}`;
        const response = await axios.get(url);
        console.log('News API response:', response.data);  // Log API response
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);  // Log error
        throw new Error('Error fetching news');
    }
};

export const getNewsByCategory = async (req: Request, res: Response) => {
    const { category } = req.params; // Get category from the URL

    try {
        const newsData = await fetchNews(category);
        if (newsData.articles.length === 0) {
            return res.status(404).json({ message: 'No news found for this category' });
        }
        res.json(newsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
};
