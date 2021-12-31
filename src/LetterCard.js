import React from "react";

function LetterCard({obj}) {

    return (
        <div className='margin border'>
            <form >
                <h1>{obj.letter}</h1>
                <h2 className='margin'>{obj.max} {obj.sign} {obj.min}</h2>
                <input className='margin input' type="text" name="answer" size='10' placeholder="your answer"/>
            </form>
        </div>
    )
}

export default LetterCard;