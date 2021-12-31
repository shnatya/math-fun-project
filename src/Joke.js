import React from "react";
import Letters from "./Letters";
import Answer from "./Answer";

function Joke({joke, settings}) {
    const {min, max, operation} = settings;
    const originalArrayOfLetters = joke.answer.split("")
    
     const collectingObjects = originalArrayOfLetters.map(letter => {
        const objectForLetterCard = {}
        
        const number1 = Math.floor(Math.random()*(max-min) + parseInt(min))
        const number2 = Math.floor(Math.random()*(max-min) + parseInt(min))
    
        const maxNumber = Math.max(number1, number2)
        const minNumber = Math.min(number1, number2)

        if(operation === "+") {
            let sum = minNumber + maxNumber;
            Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {max: maxNumber}, {total: sum}, {sign: "+"})
            return objectForLetterCard;
        }
        else if(operation === "-") {
            let diff = maxNumber - minNumber;
            Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {max: maxNumber}, {total: diff}, {sign: "-"})
            return objectForLetterCard;
        }
        else if(operation === "*") {
            let multi = maxNumber * minNumber;
            Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {max: maxNumber}, {total: multi}, {sign: "*"})
            return objectForLetterCard;
        }
    })
    console.log(collectingObjects)
     

    
    
    return (
        <div className="border-joke"> 
            <h2>{joke.question}</h2>
            <Letters collectingObjects={collectingObjects}/>
            
        </div>
    )
}
//<Answer collectingObjects={collectingObjects}/>
export default Joke;