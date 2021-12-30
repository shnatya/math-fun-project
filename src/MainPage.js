import React, { useEffect, useState } from "react";
import Joke from "./Joke"

function MainPage() {
    const [jokesDB, setJokesDB] = useState([])
    const [jokeIndex, setJokeIndex] = useState(0)

    useEffect(() => 
        fetch("http://localhost:3000/jokes")
        .then(res => res.json())
        .then(data => setJokesDB(data))
        , []
    )
    const jokeToDisplay = jokesDB[jokeIndex]
    return (
        <main>
            <Joke joke={jokeToDisplay}/>
        </main>
    )
}

export default MainPage;