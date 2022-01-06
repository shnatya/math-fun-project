import React from "react";
import Letter from "./Letter";

function Answer({ arrayOfObjectsForLetters }) {
    
     return (
        <div className='circle-container'>
        {arrayOfObjectsForLetters.map((obj, index) => <Letter obj={obj} key={index} />)}
        </div>
     )
}

export default Answer;