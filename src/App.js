import React from 'react';

import './App.css'; 
// import Sudoku from './Components/Sudoku/Sudoku';
import Sudookuu from './Components/Sudookuu/Sudookuu';



const App = () => {
 

  return (
    <div className="app">
    <h1>Sudoku Game</h1>
    <Sudookuu/>
      {/* <Sudoku/> */}
    </div>
  );
};

export default App;
