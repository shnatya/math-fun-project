import React from "react";
import Circle from "./Circle";

function Answer({arrayOfObjectsForLetters, rightAnswer}) {

     return (
        <div className='flex-container'>
        {arrayOfObjectsForLetters.map((obj, index) =>
            <Circle obj={obj} key={index} rightAnswer={rightAnswer}/>)}
        </div>
     )
}

export default Answer;