import React, { useEffect } from "react";

function LetterCard({letter, min, max, operation, calculateAnswer}) {

    const number1 = Math.floor(Math.random()*(max-min) + parseInt(min))
    const number2 = Math.floor(Math.random()*(max-min) + parseInt(min))
   
    const maxNumber = Math.max(number1, number2)
    const minNumber = Math.min(number1, number2)

    useEffect(() => {
        calculateAnswer(minNumber, maxNumber)},
        [maxNumber])

    return (
        <div className='margin border'>
            <form >
                <h1>{letter}</h1>
                <h2 className='margin'>{maxNumber} {operation} {minNumber}</h2>
                <input className='margin input' type="text" name="answer" size='10' placeholder="your answer"/>
            </form>
        </div>
    )
}

export default LetterCard;