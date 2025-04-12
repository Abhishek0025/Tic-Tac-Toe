// src/components/Board.jsx
import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];
    
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner) return; // Ignore if square is already filled or game is over

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
    
    const result = checkWinner(newSquares);
    if (result) {
      setWinner(result.winner);
      setWinningSquares(result.line); // Save the winning line
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningSquares([]);
  };

  return (
    <div className="board">
      <div className="status">
        {winner ? `${winner} wins!` : `Next player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board-grid">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            isWinning={winningSquares.includes(index)} // Highlight the winning squares
          />
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default Board;
