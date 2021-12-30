import React from "react";
import Circle from "./Circle";

function Answer({originalArray}) {
    return (
        <div className='flex-container'>
            {originalArray.map((letter, index) => <Circle key={index} letter={letter} />)}
        </div>
    )
}

export default Answer;