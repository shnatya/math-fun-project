import React from "react";
import LetterCard from "./LetterCard"

function Answer({answer, settings}) {
    const arrayOfLetters = answer.split("")
    
    return (
        <div className='flex-container'>
            {arrayOfLetters.map((letter, index) => <LetterCard letter={letter} key={index} settings={settings} />)}
        </div>
    )
}

export default Answer;