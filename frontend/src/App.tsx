import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing routing components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import News from './components/news'; 
import AboutPage from './components/aboutPage';
import SavedCards from './components/saveCards';
import NewsDetail from './components/NewsDetail';// Importing News component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignupForm from './components/signupForm';
import LoginForm from './components/loginForm';

const App: React.FC = () => {
  return (
    <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:category" element={<NewsDetail />} />
        <Route path="/saved" element={<SavedCards />} />
        <Route path="/about" element={<AboutPage />} /> {/* Added About route */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    <Footer />
  </div>
  );
};

export default App;
