const KEY = "sudoku-board";

class StorageService {
  /**
   * Dit functie zorgt er voor dat er een nieuwe sudoku board ingezet kan worden.
 */
  setBoard(board) {
    localStorage.setItem(KEY, JSON.stringify(board));
  }

  /**
   * Dit functie zorgt er voor dat de sudoku board opgehaalt kan worden
 * @return  {Json}   
 */
  getBoard() {
    return JSON.parse(localStorage.getItem(KEY));
  }
}

export default new StorageService();
