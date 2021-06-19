import React from "react";
import {LineChart, Barchart} from '../components/Chart';

/**
 * Hier is de backtracking form. hier word de chart geinitialiseerd ook word er uitleg gegeven over de time complexiteit van backtracking algoritme
 */
const Backtrackingform = () => (
    <div className="backtracking-form">
      <h1>Backtracking Algoritme:</h1>
      <div className="description">
        <h2>Time Complexitiy</h2>
        <p>De Time complexity is O(n ^ m) waarbij n het aantal mogelijkheden is voor elk vierkant (Als de klasieke sudoku word gebruikt waar een 9x9 grid word gebruikt) en m het aantal lege velden is.
          <br></br>y-axis = Stappen
        </p>
      </div>
      <div id="backtracking-chart">
        
        <LineChart/>
      </div>
      <hr></hr>
    </div>
);

/**
 * Hier is de vergelijkbare algoritmes form. hier word de chart geinitialiseerd ook word er getoont welke verschillende algoritmes er zijn er wat de verschillen zijn tussen die algoritmes
 */
  const VergelijkbareAlgoritme = () => (
    <div className="vergelijkbare-Algoritme-form">
      <h1>Vergelijkbare Algoritme:</h1>
      <div className="description">
        <h2>Uitleg</h2>
        <p>Hieronder in de grafiek wordt er getoond wat de verschil is in stappen tussen de verschillende algoritmes.<br></br><br></br>y-axis = Stappen</p>
        
      </div>
      <div id="vergelijkbare-Algoritme-chart">
        <Barchart/>
      </div>
      <hr></hr>
    </div>
);

export {
  Backtrackingform,
  VergelijkbareAlgoritme
}