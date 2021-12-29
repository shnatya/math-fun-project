import React from "react";

function LetterCard({letter}) {
    const min = 100;
    const max = 999; 

    const number1 = Math.floor(Math.random()*(max-min)+min)
    const number2 = Math.floor(Math.random()*(max-min)+min)
   
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