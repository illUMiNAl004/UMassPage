import React from 'react';
import Card from './Card';
import './App.css'; // Make sure to create this file

const events = [
  { title: 'Sweets and More', description: 'Try our new flavors!', imageUrl: '/images/smoothie.jpg', link: 'https://www.instagram.com/umasssweets/?hl=en' },
  { title: 'UMass Cybersecurity Club', description: 'Cybersecurity Club at UMass Amherst', imageUrl: '/images/cyber.jpg', link: 'https://www.instagram.com/umasscybersec/?hl=en' },
  { title: 'Build UMass', description: 'BuildUMass Software Development Club at UMass Amherst', imageUrl: '/images/build.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
  { title: 'UMass Anime Club', description: 'Anime Club at UMass Amherst', imageUrl: '/images/anime.jpg', link: 'https://www.instagram.com/umassanime/?hl=en' },
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