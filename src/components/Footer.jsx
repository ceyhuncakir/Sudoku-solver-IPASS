import React from "react";


/**
 * dit is het functie voor het footer hier worden de socials getoont en ook de links naar nuttige informatie
*/
const Footer = () => (
    <div className="footer">
      <p>&copy; Copyright 2021, IPASS - Sudoku Solver - Ceyhun Cakir</p>
      <div className="socials">
        <a id="twitter" href="https://twitter.com/AstraCSG0"><i class="fab fa-twitter-square"></i></a>
        <a id="github" href="https://github.com/ceyhuncakir"><i class="fab fa-github"></i></a>
        <a id="mail" href="mailto:ceyhuncakir@live.nl"><i class="fas fa-envelope-open"></i></a>
      </div>
    </div>
  );

export default Footer;