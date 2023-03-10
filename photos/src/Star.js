import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'palevioletred' : 'lightgray'} onClick={onSelect} />
);

export default Star;

Star.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};
