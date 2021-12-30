import React from "react";
import LetterCard from "./LetterCard"

function Answer({answerOfJoke, settings}) {
    const originalArrayOfLetters = answerOfJoke.split("")
    const arrayToShuffle = [...originalArrayOfLetters]
    const arrayLength = originalArrayOfLetters.length;


    
    for(let i = arrayLength-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temperateVar = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[j];
        arrayToShuffle[j] = temperateVar;
        console.log(arrayToShuffle)
     }
     console.log(arrayToShuffle)
     console.log(originalArrayOfLetters)
    return (
        <div className='flex-container'>
            {arrayToShuffle.map((letter, index) => <LetterCard letter={letter} key={index} settings={settings} />)}
        </div>
    )
}

export default Answer;
