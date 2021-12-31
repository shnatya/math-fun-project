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
     console.log(shuffledArray)
     
    function checkTotal(answer, obj) {
        
        if(parseInt(answer) === obj.total) {
            console.log("Great!")
            return true
        }else{
            console.log("Oops!")
        }
    } 
    return (
        <div className='flex-container'>
            {shuffledArray.map((obj, index) =>
                <LetterCard obj={obj} key={index} checkTotal={checkTotal}/>)}
        </div>
    )
}
export default Letters;
