import React from "react";
import LetterCard from "./LetterCard"

function Answer({answerOfJoke, settings}) {
    const arrayOfLetters = answerOfJoke.split("")
    const arrayLength = arrayOfLetters.length;
    
    for(let i = arrayLength-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temperateVar = arrayOfLetters[i];
        arrayOfLetters[i] = arrayOfLetters[j];
        arrayOfLetters[j] = temperateVar;
        console.log(arrayOfLetters)
     }
     
    return (
        <div className='flex-container'>
            {arrayOfLetters.map((letter, index) => <LetterCard letter={letter} key={index} settings={settings} />)}
        </div>
    )
}

export default Answer;
