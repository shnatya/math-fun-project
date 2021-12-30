import React from "react";
import Answer from "./Answer";

function Joke({joke, settings}) {
    return (
        <div className="border-joke"> 
            <h2>{joke.question}</h2>
            <Answer answer={joke.answer} settings={settings}/>
        </div>
        
    )
}

export default Joke;