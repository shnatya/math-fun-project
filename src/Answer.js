import React from "react";
import LetterCard from "./LetterCard"

function Answer({answer}) {
    const arrayOfLetters = answer.split("")
    
    return (
        <div class='flex-container'>
            {arrayOfLetters.map((letter, index) => <LetterCard letter={letter} key={index}/>)}
        </div>
    )
}

export default Answer;