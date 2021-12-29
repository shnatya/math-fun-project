import React, { useEffect, useState } from "react";
import NewJokeForm from "./NewJokeForm";
import JokesList from "./JokesList"

function MainPage() {
    const [jokesDB, setJokesDB] = useState([])

    useEffect(() => 
        fetch("http://localhost:3000/jokes")
        .then(res => res.json())
        .then(data => setJokesDB(data))
        , []
    )

    return (
        <main>
            <JokesList jokesDB={jokesDB}/>
        </main>
    )
}

export default MainPage;