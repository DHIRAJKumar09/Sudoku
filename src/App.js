import React from 'react';

import './App.css'; 
import Sudoku from './Components/Sudoku/Sudoku';



const App = () => {
 

  return (
    <div className="app">
    <h1>Sudoku Game</h1>
      <Sudoku/>
    </div>
  );
};

export default App;
