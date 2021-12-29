import React from "react";

function LetterCard({letter}) {
    return (
        <div>
            <h1>{letter}</h1>
            <h2>{Math.floor(Math.random()*1000)} - {Math.floor(Math.random()*100)}</h2>
        </div>
    )
}

export default LetterCard;