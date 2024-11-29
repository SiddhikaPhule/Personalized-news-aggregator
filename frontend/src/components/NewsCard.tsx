import React from 'react';
import '../newsCard.css'
interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  onSave: () => void;
  isSaved: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, description, link, onSave, isSaved }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img className="card-img-top" src={image} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn-read-more" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
        <button onClick={() => { console.log('Button clicked!'); onSave(); }} className="btn-save">
          {isSaved ? 'Unsave' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
