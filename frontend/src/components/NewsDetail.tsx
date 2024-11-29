import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsCard from './NewsCard';
import '../newsDetail.css';

interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const NewsDetail: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [savedArticles, setSavedArticles] = useState<NewsArticle[]>([]);

  // Fetch news based on category
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/news/${category}`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // Load saved articles from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    setSavedArticles(saved);
  }, []);

  // Save or unsave an article
  const handleSave = (article: NewsArticle) => {
    let updatedSavedArticles = [...savedArticles];
    const isSaved = updatedSavedArticles.some((item: NewsArticle) => item.url === article.url);

    if (isSaved) {
      // Remove the article from saved list
      updatedSavedArticles = updatedSavedArticles.filter((item: NewsArticle) => item.url !== article.url);
    } else {
      // Add the article to saved list
      updatedSavedArticles.push(article);
    }

    // Update state and localStorage
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));

    // Trigger the custom event to update Navbar
    window.dispatchEvent(new Event('updateSavedCount'));
  };

  // Check if an article is saved
  const isArticleSaved = (article: NewsArticle) => {
    return savedArticles.some((item: NewsArticle) => item.url === article.url);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="news-detail-container">
      <h2>News Category: {category}</h2>
      <div className="news-card-container">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            image={article.urlToImage || 'https://via.placeholder.com/150'}
            title={article.title}
            description={article.description || 'No description available'}
            link={article.url}
            onSave={() => handleSave(article)} // Passing the handleSave function
            isSaved={isArticleSaved(article)}  // Pass the save status
          />
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
