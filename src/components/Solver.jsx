import React, { useEffect, useState } from "react";
import { Row, Col, Button} from "react-bootstrap";
import Board from "./Bord";
import sudokuService, { EMPTY_GRID, EMPTY_START_GRID } from "../js/sudokuService";
import storageService from "../js/storageService";
import Popup from "../components/Popup";


/**
 * @return  {sudokuboard, generatebutton, stopbutton, solvebutton, clearbutton, undobutton, instructions-button, Popup}   Hier word de alle functionaliteiten van de app gereturned 
 */
export default function SudokuSolver() {

  /**Hier worden alle states opgeslagen van het board.*/
  const [grid, setGrid] = useState(EMPTY_GRID);
  const [startGrid, setStartGrid] = useState(EMPTY_START_GRID);
  const [isGridDisabled, setIsGridDisabled] = useState(false);
  const [isShowProcessChecked] = useState(true);
  const [isSolved, setIsSolved] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const progressSpeed = 5;
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    /**de sudoku board word hier opgehaalt via de json parsing*/
    const storageBoard = storageService.getBoard();
    if (storageBoard) setGrid(storageBoard);
  }, []);

  const handleValueChange = (e, id) => {
    const { value } = e.target;
    /** hier word er gekeken als de value van een cell kleiner of gelijkwaardig is aan 9 en value is groter dan 0 of value is gelijkwaardig aan 0*/
    if ((value <= 9 && value > 0) || value === "") {
      const position = id.split(",");
      const newGrid = grid.map((arr) => arr.slice());
      if (value === "") newGrid[position[0]][position[1]] = 0;
      else newGrid[position[0]][position[1]] = Number(value);
      /** hier word een nieuwe grid aangemaakt met de nieuwe nummer*/
      setGrid(newGrid);
      /** nieuwe board word gezet via de json parsing*/
      storageService.setBoard(newGrid);
    }
  };

  const showProgress = async (progress) => {
     /** de grid word uitgezet zodat er geen knoppen gebruikt kunnen worden*/
    setIsGridDisabled(true);
    for (const grid of progress) {
       /** de grid word heletijd geupdated terwijl de process bezig is*/
      setGrid(grid);
       /** er word gewacht tot de board is opgelost*/
      await new Promise((resolve) => setTimeout(resolve, progressSpeed));
    }
    /** de state word naar opgelost gezet wanneer het opgelost is*/
    setIsSolved(true);

    /** hier word de setissolving state naar false gezet zodat de gebruiker weer de knoppen kan gebruiken*/
    setIsSolving(false);
  };

  const handleSolveButtonClicked = () => {
    /** de state van solving word op true gezet en de state setissolved word uitgezet*/
    setIsSolving(true);
    setIsSolved(false);
    setStartGrid(grid.map((arr) => arr.slice()));
    const progress = sudokuService.solve(grid);
    /** er word gekeken of de knop is geklikt zoja dan word de process van de backtracking getoont*/
    if (isShowProcessChecked) {
      showProgress(progress);
    } else {
      /** anders word de grid uitgezet en word de sudoku board als solved weergeven*/
      setIsGridDisabled(true);
      setGrid(progress[progress.length - 1]);
      setIsSolved(true);
      setIsSolving(false);
    }
  };

  const reset = () => {
    /** de grit word op empty gezet wanneer de reset functie opgeroepen word*/
    setGrid(EMPTY_GRID);
    setStartGrid(EMPTY_START_GRID);
    /** de board word bruikbaar gezet*/
    setIsGridDisabled(false);
    /** we zeggen dat de sudoku board niet gesolved is*/
    setIsSolved(false);
    /** de setboard word als empty grid gezet*/
    storageService.setBoard(EMPTY_GRID());
  };

  const undo = () => {
    /** de grid word bruikbaar gemaakt */
    setIsGridDisabled(false);
    /** de grid word naar de huidige selectie van sample board gezet*/
    setGrid(startGrid);
    /**de grid word naar empty gezet */
    setStartGrid(EMPTY_START_GRID);
    /** we zetten de board state naar niet solved*/
    setIsSolved(false);
  };

  return (

    <Row id="row">
      <Col sm={8} id="sudokuboard">
        <Board
          startGrid={startGrid}
          grid={grid}
          onChange={handleValueChange}
          disabled={isGridDisabled}
        />
      </Col>

      <Button id="generatebutton" variant="dark" disabled={isSolving} onClick={() => {
            reset();
            const randomGrid = sudokuService.getRandomExample();
            setGrid(randomGrid);
            storageService.setBoard(randomGrid);
          }}
        >
          Genereer bord
      </Button>
      {isSolving ? (

      <Button id="stopbutton" variant="dark" onClick={() => window.location.reload()}>
          <i class="far fa-hand-paper"></i>
      </Button>

      ) : (

      <Button id="solvebutton" variant="dark" onClick={handleSolveButtonClicked}>
          Backtrack!
      </Button>
      )}

      <Button id="clearbutton" variant="dark" disabled={isSolving} onClick={reset}>
          Leeg bord
      </Button>

      <Button id="undobutton" variant="dark" disabled={!isSolved} onClick={undo}>
        <i className="fas fa-undo" />
      </Button>

      <Button id="instructions-button" variant="dark" disabled={isSolving} onClick={() => setButtonPopup(true)}>
        <i className="fas fa-book-reader" />
      </Button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Instructies:</h3>
          <h5>Stap 1: Genereer een sudoku board</h5>
          <h5>Stap 2: Klik op de backtrack knop om de sudoku board op te lossen</h5>
          <h5>Stap 3: geniet van de opgeloste sudoku board!</h5>
      </Popup>
    </Row>
  );
}
