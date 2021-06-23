import React from "react";
import { FormControl } from "react-bootstrap";


/**
 * @return  {FormControl}   Hier word de alle functionaliteiten van de app gereturned 
 */
function Square({ id, value, disabled, style, onChange }) {
  /**hier word een form terug gereturned met de getal die de gebruiker aangeeft.*/
  return (
    <FormControl
      className="square"
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e, id)}
      disabled={disabled}
      maxLength="1"
      style={style}
      title="squaredefault"
    />
  );
}

export default Square
