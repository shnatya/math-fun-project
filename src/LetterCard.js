import React from "react";

function LetterCard({letter, settings}) {
    const {min, max, operation} = settings;
  
    const number1 = Math.floor(Math.random()*(max-min) + parseInt(min))
    console.log(number1)
    const number2 = Math.floor(Math.random()*(max-min) + parseInt(min))
    console.log(number2)
   
    const maxNumber = Math.max(number1, number2)
    const minNumber = Math.min(number1, number2)

    return (
        <div className='margin border'>
            <form >
                <h1>{letter}</h1>
                <h2 className='margin'>{maxNumber} - {minNumber}</h2>
                <input className='margin input' type="text" name="answer" size='10' placeholder="your answer"/>
            </form>
        </div>
    )
}

export default LetterCard;