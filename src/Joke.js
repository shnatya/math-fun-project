import React from "react";
import Letters from "./Letters";

function Joke({joke, settings}) {
    return (
        <div className="border-joke"> 
            <h2>{joke.question}</h2>
            <Letters answerOfJoke={joke.answer} settings={settings}/>
        </div>
        
    )
}

export default Joke;