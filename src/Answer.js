import React from "react";
import Circle from "./Circle";
import LetterCard from "./LetterCard";

function Answer({arrayOfObjectsForLetters}) {
    console.log("array of objects for letters:")
    console.log(arrayOfObjectsForLetters)
     return (
        <div className='flex-container'>
        {arrayOfObjectsForLetters.map((obj, index) =>
            <Circle obj={obj} key={index} />)}
        </div>
     )
}

export default Answer;