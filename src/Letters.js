import React, { useState } from "react";
import Answer from "./Answer";
import LetterCard from "./LetterCard"

function Letters({answerOfJoke, settings}) {
    const {min, max, operation} = settings;
    const [arrayOfAnswer, setArrayOfAnswers] = useState([])
    
    const originalArrayOfLetters = answerOfJoke.split("")
    const shuffledArray = [...originalArrayOfLetters]
    const arrayLength = originalArrayOfLetters.length;
    
    for(let i = arrayLength-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temperateVar = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temperateVar;
        console.log(shuffledArray)
     }
     console.log(shuffledArray)
     console.log(originalArrayOfLetters)

     function calculateAnswer(min, max) {
         if(operation === "+") {
             let sum = min + max;
             setArrayOfAnswers(sum);
             console.log("array of Answers: " + arrayOfAnswer);
             console.log("sum: " + sum);
         }
         else if(operation === "-") {
            let diff = max - min;
             setArrayOfAnswers(diff);
             console.log("array of Answers: " + arrayOfAnswer)
             console.log("diff: " + diff)
         }
     }

    return (
        <>
            <div className='flex-container'>
                {shuffledArray.map((letter, index) =>
                    <LetterCard letter={letter} key={index}
                                min={min} max={max} operation={operation}
                                calculateAnswer={calculateAnswer}  />)}
            </div>
            <div>
                <Answer originalArray={originalArrayOfLetters} />
            </div>
        </>
    )
}

export default Letters;
