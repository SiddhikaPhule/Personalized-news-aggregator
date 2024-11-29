import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar: React.FC = () => {
  const [savedCount, setSavedCount] = useState<number>(0);

  // Function to update saved articles count
  const updateSavedCount = () => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    setSavedCount(savedArticles.length);
  };

  // Set up event listener for custom event
  useEffect(() => {
    // Load saved count on component mount
    updateSavedCount();

    const handleCustomEvent = () => {
      updateSavedCount();
    };

    // Listen to the custom "updateSavedCount" event
    window.addEventListener('updateSavedCount', handleCustomEvent);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('updateSavedCount', handleCustomEvent);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/news">
          News
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* Navbar links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved">
                {/* Display saved articles count */}
                Saved <span className="badge bg-secondary">{savedCount}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              {/* Signup Button */}
              <Link to="/login">
                <button className="btn btn-outline-success my-2 my-sm-0 login-btn" type="button">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
