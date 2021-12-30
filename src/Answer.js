import React from "react";
import LetterCard from "./LetterCard"

function Answer({answerOfJoke, settings}) {
    const arrayOfLetters = answerOfJoke.split("")
    
    return (
        <div className='flex-container'>
            {arrayOfLetters.map((letter, index) => <LetterCard letter={letter} key={index} settings={settings} />)}
        </div>
    )
}

export default Answer;