import React, { useState } from "react";
import LetterCard from "./LetterCard"

function Letters({collectingObjects}) {
    
    const shuffledArray = [...collectingObjects]
    const arrayLength = shuffledArray.length;
    
    for(let i = arrayLength-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temperateVar = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temperateVar;
     }

    return (
        <div className='flex-container'>
            {shuffledArray.map((obj, index) =>
                <LetterCard obj={obj} key={index} />)}
        </div>
    )
}
export default Letters;
