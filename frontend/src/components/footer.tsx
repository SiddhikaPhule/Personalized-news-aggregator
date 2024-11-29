import React from 'react';
import '../footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h5 className="footer-title">News Aggregator</h5>
        <p>&copy; 2024 News Aggregator. All rights reserved.</p>

        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>

        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
      {/* Signature */}
      <div className="footer-credit">
        <p>
          Project crafted by <strong>Siddhika</strong> and <strong>Kajal</strong>.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
