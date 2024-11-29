import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../news.css';

const News: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleNavigate = () => {
    if (category) {
      navigate(`/news/${category}`);
    }
  };

  return (
    <div className="news-container">
      <h2>Select a News Category</h2>
      <select className="news-dropdown" value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Tech">Tech</option>
        <option value="Sports">Sports</option>
        <option value="Health">Health</option>
        <option value="Business">Business</option>
        <option value="entertainment">entertainment</option>
        <option value="political">political</option>

      </select>
      <button onClick={handleNavigate} className="navigate-button">
        Go to News
      </button>
    </div>
  );
};

export default News;
