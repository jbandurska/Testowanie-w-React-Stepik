import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRating from './StarRating';
import { useColors } from './ColorProvider';
import PropTypes from 'prop-types';

export default function Details({
  name = 'Animal',
  letters = ['A', 'B'],
  age = { dog: 5, cat: 3 },
}) {
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
      <div style={{ display: 'none' }}>
        {name}
        {letters.map((letter) => letter)}
        {age.cat}
        {age.dog}
      </div>
    </div>
  );
}

Details.propTypes = {
  name: PropTypes.string,
  letters: PropTypes.array,
  age: PropTypes.object,
};
