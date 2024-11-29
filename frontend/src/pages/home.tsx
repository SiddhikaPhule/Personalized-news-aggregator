import React from 'react';
// import News from './components/news';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
