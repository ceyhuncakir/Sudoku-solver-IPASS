import React from "react";
import Square from "./Square";


/**
 * @param  {startGrid} 
 * @param {grid}
 * @param {onChange}
 * @param {disabled}
 * @param {popover}
 * @return  {squares}   chart met data die aangegeven is hier beneden
 */
function Board({ startGrid, grid, onChange, disabled, popover }) {
  const renderSquares = () => {
    const squares = [];

    /**for elke integer kijken we of de integer kleiner is dan het getal 9 zo ja increment het met 1 tot 9 */
    for (let i = 0; i < 9; i++) {
      /**for elke integer kijken we of de integer kleiner is dan het getal 9 zo ja increment het met 1 tot 9 */
      for (let j = 0; j < 9; j++) {
        const index = `${i},${j}`;
        /** hier pushen we de getallen naar de board */
        squares.push(
          <Square
            style={
              startGrid[i][j] === 0 ? { color: "blue" } : { color: "black" }
            }
            key={index}
            id={index}
            onChange={onChange}
            value={grid[i][j] === 0 ? "" : grid[i][j]}
            disabled={disabled}
          />
        );
      }
    }

    return squares;
  };

  return <div className="sudoku-grid shadow">{renderSquares()}</div>;
}

export default Board;
