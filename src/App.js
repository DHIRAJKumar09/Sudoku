import React, { useState } from 'react';
import Grid from './Components/Sudoku/Grid';
import './App.css'; 

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const App = () => {
  const [board, setBoard] = useState(initialBoard);

  return (
    <div className="app">
      <h1>Sudoku Game</h1>
      <Grid board={board} setBoard={setBoard} />
      <button onClick={() => console.log(board)}>Print Board State</button>
    </div>
  );
};

export default App;
