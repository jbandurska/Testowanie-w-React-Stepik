import React from 'react';
import { Link, useSearchParams, Navigate } from 'react-router-dom';
import StarRating from './StarRating';
import IMAGES from './images';
import { useColors } from './ColorProvider';

function startingNumber() {
  const numberOfItems = IMAGES.length;
  return Math.floor(Math.random() * numberOfItems);
}

export default function Home() {
  const { colors, rateColor } = useColors();
  const [searchParams] = useSearchParams();
  const imageNumber = +searchParams.get('id') - 1;

  return searchParams.get('id') !== null ? (
    <div className="photo-card">
      <img src={colors[imageNumber].src} alt={colors[imageNumber].alt} />

      <StarRating
        selectedStars={colors[imageNumber].rating}
        onRate={(rating) => rateColor(imageNumber + 1, rating)}
      />

      <p>Średnia: {Math.round(colors[imageNumber].mean * 100) / 100}</p>
      <Link to={`/details/${colors[imageNumber].id}`} className="details">
        Details
      </Link>
      <div className="buttons">
        {imageNumber !== 0 ? (
          <Link className="button" to={`/?id=${imageNumber}`}>
            {'<'}
          </Link>
        ) : (
          <button className="invisible">{'<'}</button>
        )}
        {imageNumber !== colors.length - 1 ? (
          <Link className="button" to={`/?id=${imageNumber + 2}`}>
            {'>'}
          </Link>
        ) : (
          <button className="invisible">{'<'}</button>
        )}
      </div>
    </div>
  ) : (
    <Navigate to={`/?id=${startingNumber() + 1}`} />
  );
}
