import React from 'react';
import '../aboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      <div className="about-header">
        <h1>About Our App</h1>
        <p>Learn more about the features and capabilities of our app!</p>
      </div>

      <div className="about-content">
        <div className="app-info">
          <h2>What Our App Does</h2>
          <p>Our app provides real-time news updates, allows you to save articles, and provides a seamless browsing experience.</p>
        </div>

        <div className="app-features">
          <h3>Key Features</h3>
          <ul>
            <li>Real-time news updates</li>
            <li>Save your favorite articles</li>
            <li>Easy-to-use interface</li>
            <li>Cross-device synchronization</li>
          </ul>
        </div>
      </div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
