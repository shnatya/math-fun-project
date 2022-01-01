import React from "react";
import Circle from "./Circle";

function Answer({ arrayOfObjectsForLetters }) {

     return (
        <div className='circle-container'>
        {arrayOfObjectsForLetters.map((obj, index) => <Circle obj={obj} key={index} />)}
        </div>
     )
}

export default Answer;