
import React, { useState } from 'react';
import Board from './Board';
import { generateSudoku, isValidSudoku } from '../Sudoku/generateSudoku';
import './Sudoku.css';

const Sudoku = () => {
  const [board, setBoard] = useState(generateSudoku());
  const [isSolved, setIsSolved] = useState(false);

  const handleCellChange = (row, col, value) => {
    const newBoard = [...board];
    newBoard[row][col] = value === '' ? 0 : parseInt(value, 10);
    setBoard(newBoard);
    setIsSolved(isValidSudoku(newBoard));
  };

  return (
    <div className="sudoku-container">
      <Board board={board} onCellChange={handleCellChange} />
      {isSolved && <p>Congratulations! You solved the puzzle!</p>}
    </div>
  );
};

export default Sudoku;
