import React from 'react';
import './Card.css';

const NasaCard = ({ photo }) => {
    if (!photo.url) return <h3>Loading...</h3>;
    
    if (!photo.copyright)
      return (
        <div className="cardContainer">
        <h2>title: {photo.title}</h2>
        <div className="imageContainer">
            <img alt={photo.title} src={photo.url} />
        </div>
        <div className="explanationContainer">
            <p>{photo.explanation}</p>
        </div>
        <div className="copyrightContainer">
          <p>Date: {photo.date}</p>
        </div>
      </div>
    );

    return(
      <div className="cardContainer">
        <h2>title: {photo.title}</h2>
        <div className="imageContainer">
            <img alt={photo.title} src={photo.url} />
        </div>
        <div className="explanationContainer">
            <p>{photo.explanation}</p>
        </div>
        <div className="copyrightContainer">
          <p>Taken By: {photo.copyright}</p>
          <p>Date: {photo.date}</p>
        </div>
      </div>
    );
    
};



export default NasaCard;