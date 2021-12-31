import React from "react";
import Circle from "./Circle";
import LetterCard from "./LetterCard";

function Answer({collectingObjects}) {
     return (
        <div className='flex-container'>
        {collectingObjects.map((obj, index) =>
            <Circle obj={obj} key={index} />)}
        </div>
     )
}

export default Answer;