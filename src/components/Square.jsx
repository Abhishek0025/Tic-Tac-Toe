// src/components/Square.jsx
import React from 'react';

const Square = ({ value, onClick, isWinning }) => {
  return (
    <button 
      className={`square ${isWinning ? 'winning' : ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
