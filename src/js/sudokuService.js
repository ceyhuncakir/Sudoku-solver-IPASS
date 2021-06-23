export const EMPTY_GRID = () =>
  new Array(9).fill(null).map(() => new Array(9).fill(0));
export const EMPTY_START_GRID = () =>
  new Array(9).fill(null).map(() => new Array(9));

class SudokuService {
  solvingProcess = [];

 /**
   * Dit functie returned paar sample boarden die de gebruiker kan kiezen om een sudoku board op te lossen.
   *@return {examples}
 */
  getRandomExample() {
    const examples = [
      [
        [0, 0, 3, 0, 0, 0, 0, 0, 0],
        [5, 8, 0, 2, 0, 0, 3, 0, 9],
        [2, 0, 0, 4, 0, 5, 8, 7, 1],
        [3, 7, 0, 0, 1, 0, 5, 9, 0],
        [8, 0, 0, 7, 4, 0, 1, 3, 0],
        [0, 2, 9, 0, 0, 8, 0, 0, 0],
        [6, 0, 0, 1, 0, 3, 4, 0, 7],
        [4, 0, 2, 0, 6, 0, 0, 0, 0],
        [0, 0, 0, 5, 2, 4, 6, 8, 0],
      ],
      [
        [4, 0, 0, 0, 5, 0, 0, 3, 2],
        [0, 1, 0, 0, 9, 0, 7, 0, 5],
        [7, 5, 3, 0, 0, 4, 1, 9, 6],
        [0, 0, 1, 0, 7, 0, 0, 0, 0],
        [6, 0, 9, 0, 0, 1, 2, 5, 0],
        [0, 0, 0, 5, 0, 0, 6, 1, 3],
        [3, 0, 4, 0, 0, 8, 0, 0, 1],
        [0, 0, 0, 4, 0, 0, 0, 7, 8],
        [0, 0, 0, 7, 6, 3, 0, 2, 9],
      ],
      [
        [0, 0, 4, 2, 7, 6, 0, 3, 0],
        [0, 5, 7, 1, 0, 0, 0, 4, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 9, 6, 0],
        [0, 0, 0, 0, 0, 7, 1, 8, 5],
        [0, 0, 0, 0, 2, 0, 3, 0, 4],
        [0, 0, 0, 7, 0, 1, 0, 9, 0],
        [0, 0, 0, 6, 0, 0, 2, 1, 0],
        [1, 0, 6, 0, 8, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 8, 0, 0, 4, 2, 0],
        [5, 0, 0, 6, 7, 0, 0, 0, 0],
        [0, 0, 0, 9, 0, 9, 0, 0, 5],
        [7, 4, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 9, 0, 3, 0, 7, 0, 0],
        [0, 0, 0, 0, 0, 7, 0, 4, 8],
        [8, 0, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 0, 0, 3],
        [0, 9, 5, 0, 0, 3, 0, 0, 0], 
      ],
    ];

    /**hier word er random sample boards opgevraagt */
    return examples[Math.floor(Math.random() * examples.length)];
  }

  /**
   * Dit functie kijkt in het sudoku board of de volgende grid empty is. zo ja word het beschikbaar gestelt aan de algoritme
   *@param grid
 */
  findEmpty(grid) {
    /**er word gekeken of integer 0 kleiner is dan de grid length zo ja word het met incrementeel verhoogt*/
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        /**er word hier gekeken of de grid position empty is zo ja word er een nummer in geplaats */
        if (grid[i][j] === 0) return { i, j };
      }
    }
    return false;
  }

  /**
   * Dit functie zorgt er voor dat de juiste getallen in het backtracking algoritme worden gezet. Dit doet die door naar de col & rows te kijken of de nummer er in past
   *@param grid
   *@param row
   *@param col
   *@param num
 * @return  {isSafe}   
 */

  isSafe(grid, row, col, num) {
    /**hier word er gekeken of integer kleiner is dan de grid length zoja word het incrementeel verhoogd */
    for (let i = 0; i < grid.length; i++) {
      /**hier worden gekeken of de integer die in het col staat gelijkwaardig staat aan de huidige nummer en of integer niet aan row gelijkstaat */
      if (grid[i][col] === num && i !== row) return false;
      if (grid[row][i] === num && i !== col) return false;
    }

    const x = Math.floor(row / 3) * 3;
    const y = Math.floor(col / 3) * 3;

    /**hier word er vooruit gekeken of er plaats is voor een getal */
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (grid[i][j] === num && i !== row && j !== col) return false;
      }
    }

    return true;
  }

  /**
   * dit functie is het backtracking algoritme die zorgt dat het sudoku board opgelost kan worden.
   *@param grid
 * @return  {grid}   
 */
  solveRecursive(grid) {
    this.solvingProcess.push(grid.map((arr) => arr.slice()));
    const find = this.findEmpty(grid);
    let position;
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    /**er word gekeken of er een nummer is gevonden zo ja verrandert die de huidige positie met de nummer */
    if (find) {
      position = find;
    } else return true;

    while (nums.length !== 0) {
      const num = nums[0];

      /**er word gekeken of de nummer safe is op de positie zo ja verrandert die de huidige nummer met de geselecteerde nummer */
      if (this.isSafe(grid, position.i, position.j, num)) {
        grid[position.i][position.j] = Number(num);
        if (this.solveRecursive(grid)) return true;
        grid[position.i][position.j] = 0;
      }
      /**anders worden de nummers geshift tussen 1 en 9 */
      nums.shift();
    }

    console.log("niet solvable")
    return false;
  }

  /**
   * dit is het solve process van de recursive algoritme. Dit functie word opgeroepen als de sudoku opgelost moet worden.
   *@param grid
 * @return  {solvingProcess}   
 */
  solve(grid) {
    /**dit is de proces waar de grid als parameter komt en de recursion functie op de grid word gebruikt */
    this.solvingProcess = [];
    this.solveRecursive(grid);
    return this.solvingProcess;
  }
}

export default new SudokuService();
