import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRating from './StarRating';
import { useColors } from './ColorProvider';

export default function Details() {
  const { colors, rateColor } = useColors();
  const { id } = useParams();
  const currImage = colors[id - 1];

  return (
    <div className="photo-card">
      <img src={currImage.src} alt={currImage.alt} />
      <StarRating
        selectedStars={currImage.rating}
        onRate={(rating) => rateColor(id, rating)}
      />

      <p>Średnia: {Math.round(currImage.mean * 100) / 100}</p>
      <p>Autor - {currImage.author}</p>
      <p>Zrobione {currImage.date}</p>
      <p className="image-details">{currImage.details}</p>
      <Link to={`/?id=${currImage.id}`} className="go-back-button">
        Go Back
      </Link>
    </div>
  );
}
