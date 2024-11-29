import React, { useEffect, useState } from 'react';
import '../savedCard.css';

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

const SavedCards: React.FC = () => {
  const [savedArticles, setSavedArticles] = useState<NewsArticle[]>([]);

  // Load saved articles from localStorage on component mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    setSavedArticles(saved);
  }, []);

  // Unsave an article
  const handleUnsave = (url: string) => {
    const updatedArticles = savedArticles.filter((article) => article.url !== url);
    setSavedArticles(updatedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));

    // Trigger the custom event to update Navbar
    window.dispatchEvent(new Event('updateSavedCount'));
  };

  return (
    <div className="saved-cards-container">
      <h2>Saved Articles</h2>
      <div className="saved-cards">
        {savedArticles.length === 0 ? (
          <p>No saved articles yet!</p>
        ) : (
          savedArticles.map((article, index) => (
            <div className="saved-card" key={index}>
              <div className="saved-card-header">
                <h3>{article.title}</h3>
                <img src={article.urlToImage || 'https://via.placeholder.com/50'} alt={article.title} />
              </div>
              <p>{article.description?.substring(0, 100)}...</p>
              <button onClick={() => handleUnsave(article.url)}>Unsave</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedCards;
