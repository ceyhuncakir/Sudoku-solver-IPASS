import React from 'react'

/**
 * Dit functie toont een popup als de gebruiker op de instructie knop klikt.
 * @param {props} 
 * @return  {popup}   chart met data die aangegeven is hier beneden
 */
function Popup(props) {
    /**er word met onclick gekeken of de persoon de button heeft geklikt zo ja dan closed de popup van zelf */
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <a className="close-btn" onClick={() => props.setTrigger(false)}></a>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup