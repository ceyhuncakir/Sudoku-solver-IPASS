import React from "react";
import { Container } from "react-bootstrap";
import SudokuSolver from "./components/Solver";
import Footer from "./components/Footer";
import { Backtrackingform, VergelijkbareAlgoritme } from "./components/Forms";

/**
 * De app word zoals dit geinitialiseerd
 * @return  {SudokuSolver, Backtrackingform, VergelijkbareAlgoritme, Footer}   De hele app waar onder de volgende componenten vallen (sudokusolver, backtrackingform, vergelijkbarealgoritmeform, footer)
 */
function App() {
  return (
    <div className="body">
      <Container className="SudokuArea">
      <SudokuSolver />
      </Container>

      <Container className="backtracking">  
      <Backtrackingform />
      </Container>

      <Container className="vergelijkbare-algoritme">
      <VergelijkbareAlgoritme />
      </Container>

      <Container className="footer">
      <Footer />
      </Container>
    </div>
  );
}

export default App;
