import React from 'react';
import Card from './Card';
import './App.css'; // Make sure to create this file

const events = [
    { "title": "Sweets and More", "description": "Try our new flavors!", "imageUrl": "/images/smoothie.jpg", "link": "https://www.instagram.com/umasssweets/?hl=en" },
    { "title": "UMass Cybersecurity Club", "description": "Cybersecurity Club at UMass Amherst", "imageUrl": "/images/cyber.jpg", "link": "https://www.instagram.com/umasscybersec/?hl=en" },
    { "title": "Build UMass", "description": "Software Development Club at UMass Amherst", "imageUrl": "/images/build.jpg", "link": "https://www.instagram.com/umassbuild/?hl=en" },
    { "title": "Archery Club", "description": "Join us for fun and practice!", "imageUrl": "/images/archery.jpg", "link": "https://www.instagram.com/umassarchery/" },
    { "title": "UMass Club Paintball", "description": "Get ready for action-packed fun!", "imageUrl": "/images/paintball.jpg", "link": "https://www.instagram.com/umasspaintball/?hl=en" },
    { "title": "Chess Club", "description": "Challenge your mind with chess!", "imageUrl": "/images/chess.jpg", "link": "https://www.instagram.com/umasschess/?hl=en" },
    { "title": "Astronomy Club", "description": "Gaze at the stars and learn astronomy!", "imageUrl": "/images/astronomy.jpg", "link": "https://www.instagram.com/umassastronomy/?hl=en" },
    { "title": "Fencing Club", "description": "Join us for fun exercises and fencing!!", "imageUrl": "/images/fencing.jpg", "link": "https://www.instagram.com/umassfencing/" },
    { "title": "UMass Boxing Club", "description": "Join us for Boxing!!",  imageUrl: "/images/boxing.jpg", link: "https://www.instagram.com/umassboxingclub/" },
    { "title": "UMass Product Club", "description": "Fun Tech Related Club", "imageUrl": "/images/product.jpg", "link": "https://www.instagram.com/umassanime/?hl=en" }
];

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">UMass Amherst: Things to try out!</h1>
      <div className="card-container">
        {events.map((event, index) => (
          <Card key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default App;