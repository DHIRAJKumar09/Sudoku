
export const generateSudoku = () => {
    
    return [
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
  };
  
  export const isValidSudoku = (board) => {
    
    const isValid = (array) => {
      const filtered = array.filter((num) => num !== 0);
      return filtered.length === new Set(filtered).size;
    };
  
    for (let i = 0; i < 9; i++) {
      const row = board[i];
      const col = board.map((row) => row[i]);
      const subgrid = board
        .slice(Math.floor(i / 3) * 3, Math.floor(i / 3) * 3 + 3)
        .flatMap((row) => row.slice((i % 3) * 3, (i % 3) * 3 + 3));
  
      if (!isValid(row) || !isValid(col) || !isValid(subgrid)) {
        return false;
      }
    }
  
    return true;
  };
  