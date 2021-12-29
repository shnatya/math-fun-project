import React from "react";

function LetterCard({letter}) {
    const min = 100;
    const max = 999; 
    return (
        <div class ='border'>
            <form >
                <h1>{letter}</h1>
                <h2>{Math.floor(Math.random()*(max-min)+min)} - {Math.floor(Math.random()*min)}</h2>
                <input class='border-input' type="text" name="answer" placeholder="your answer"/>
            </form>
        </div>
    )
}

export default LetterCard;