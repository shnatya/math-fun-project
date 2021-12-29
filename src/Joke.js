import React from "react";
import Answer from "./Answer";

function Joke({joke}) {
    return (
        <div> 
            <h2>
                {joke.question}
            </h2>
            <Answer answer={joke.answer}/>
        </div>
        
    )
}

export default Joke;