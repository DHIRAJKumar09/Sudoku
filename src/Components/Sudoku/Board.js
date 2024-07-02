// src/components/Board.js
import React from 'react';
import './Sudoku.css';

const Board = ({ board, onCellChange }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="number"
            min="1"
            max="9"
            value={cell === 0 ? '' : cell}
            onChange={(e) => onCellChange(rowIndex, colIndex, e.target.value)}
            className="cell"
          />
        ))
      )}
    </div>
  );
};

export default Board;
