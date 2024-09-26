import React from 'react';
import './Card.css'; // Create this CSS file for styling

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      <div style={{ marginTop: '40px' }}></div>
      
      <a href={link} className="card-button">View Details</a>
    </div>
  );
};

export default Card;