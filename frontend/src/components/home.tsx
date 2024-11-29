import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/news');
  };

  return (
    <div className="home-container">
      <h2>Welcome to the News Aggregator</h2>
      <button onClick={handleNavigate} className="navigate-button">
        Start Reading News
      </button>
    </div>
  );
};

export default Home;
