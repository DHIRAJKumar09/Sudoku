import React from 'react';
import './Cell.css'; 
const Cell = ({ value, onChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue === '' ? '' : parseInt(newValue, 10)); 
  };

  return (
    <input
      type="text"
      className="cell"
      value={value === 0 ? '' : value} 
      onChange={handleChange}
      maxLength="1"
    />
  );
};

export default Cell;
