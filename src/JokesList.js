import React from "react";
import Joke from "./Joke"

function JokesList({jokesDB}) {
    return (
        <div>
            <ul>
                {jokesDB.map(joke => <Joke key={joke.id} joke={joke} />)}
            </ul>
        </div>
    )
}

export default JokesList;