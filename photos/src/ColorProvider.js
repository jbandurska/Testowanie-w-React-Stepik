//ColorProvider.js

import React, { createContext, useState, useContext } from 'react';
import IMAGES from './images';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(IMAGES);

  const rateColor = (id, rating) => {
    const picture = IMAGES[id - 1];
    setColors(
      colors.map((color) => {
        if (color.id === +id) {
          const newMean =
            (picture.mean * picture.numberOfRatings + rating) /
            (picture.numberOfRatings + 1);
          return { ...color, rating, mean: newMean };
        } else return color;
      })
    );
  };

  return (
    <ColorContext.Provider value={{ colors, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
