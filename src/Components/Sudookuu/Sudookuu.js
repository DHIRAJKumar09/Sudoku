import React, { useState } from 'react';
import './Sudookuu.css';

const Sudookuu = () => {
  const initial = [
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

  const [arr, setArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function onInputChange(e, row, col) {
    const val = parseInt(e.target.value) || 0;
    const grid = getDeepCopy(arr);

    if (val >= 1 && val <= 9) {
      grid[row][col] = val;
      if (!checkValid(grid, row, col, val)) {
        alert("Invalid move! This number causes a duplicate in the row, column, or 3x3 grid.");
      } else {
        setArr(grid);
      }
    } else {
      grid[row][col] = 0;
      setArr(grid);
    }
  }

  function checkRow(grid, row, num) {
    return grid[row].filter(x => x === num).length <= 1;
  }

  function checkCol(grid, col, num) {
    return grid.map(row => row[col]).filter(x => x === num).length <= 1;
  }

  function checkBox(grid, row, col, num) {
    const boxArr = [];
    const rowStart = row - (row % 3);
    const colStart = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr.push(grid[rowStart + i][colStart + j]);
      }
    }
    return boxArr.filter(x => x === num).length <= 1;
  }

  function checkValid(grid, row, col, num) {
    return (
      checkRow(grid, row, num) &&
      checkCol(grid, col, num) &&
      checkBox(grid, row, col, num)
    );
  }

  function getNext(row, col) {
    return col !== 8 ? [row, col + 1] : [row + 1, 0];
  }

  function solver(grid, row = 0, col = 0) {
    if (row === 9) return true; // Puzzle solved
    if (grid[row][col] !== 0) {
      const [newRow, newCol] = getNext(row, col);
      return solver(grid, newRow, newCol);
    }
    for (let num = 1;  num <= 9; num++) {
      if (checkValid(grid, row, col, num)) {
        grid[row][col] = num;
        const [newRow, newCol] = getNext(row, col);
        if (solver(grid, newRow, newCol)) {
          return true;
        }
        grid[row][col] = 0; // Backtrack
      }
    }
    return false;
  }

  function solveSudoku() {
    const sudoku = getDeepCopy(arr);
    solver(sudoku);
    setArr(sudoku);
  }

  function compareSudokus(currentSudoku, solvedSudoku) {
    let res = {
      isComplete: true,
      isSolved: true,
    };
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (currentSudoku[i][j] !== solvedSudoku[i][j]) {
          res.isSolved = false;
        }
        if (currentSudoku[i][j] === 0) {
          res.isComplete = false;
        }
      }
    }
    return res;
  }

  function checkSudoku() {
    let sudoku = getDeepCopy(initial);
    solver(sudoku);
    let compare = compareSudokus(arr, sudoku);

    if (compare.isComplete) {
      alert("Congratulations! You have solved the Sudoku.");
    } else if (compare.isSolved) {
      alert("Keep going!");
    } else {
      alert("Sudoku can't be solved. Try again.");
    }
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h3>Sudookuu Solver</h3>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => {
              return (
                <tr key={rindex} className={(row + 1) % 3 === 0 ? 'Rowborder' : ''}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => {
                    return (
                      <td key={rindex + cindex} className={(col + 1) % 3 === 0 ? 'Colborder' : ''}>
                        <input
                          onChange={(e) => onInputChange(e, row, col)}
                          value={arr[row][col] === 0 ? '' : arr[row][col]}
                          className='cellInput'
                          disabled={initial[row][col] !== 0}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='btncontainer'>
          <button className='checkbtn btn' onClick={checkSudoku}>Check</button>
          <button className='solvebtn btn' onClick={solveSudoku}>Solve</button>
          <button className='resetbtn btn' onClick={() => setArr(getDeepCopy(initial))}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Sudookuu;
