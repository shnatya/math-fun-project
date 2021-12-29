import React from "react";

function Joke({joke}) {
    return (
        <li>
            {joke.question}
        </li>
    )
}

export default Joke;