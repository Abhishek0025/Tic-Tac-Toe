// src/App.jsx
import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe Game</h1>
      <Board />
    </div>
  );
};

export default App;
