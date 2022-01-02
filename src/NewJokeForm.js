import React, { useState } from "react";

function NewJokeForm({ addNewJoke}) {
    const [newJoke, setNewJoke] = useState({
        question: "",
        answer: "",
    })
    function onSubmit(event) {
        event.preventDefault()
        addNewJoke(newJoke)
    }
    function onChange(event) {
        setNewJoke({
            ...newJoke,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="margin input" onChange={onChange} type="text" name="question"
                    placeholder="Type in your question ..." value={newJoke.question}
                    autoComplete="off" />
            <input className="margin input" onChange={onChange} type="text" name="answer"
                    placeholder="Type in your answer ..." value={newJoke.answer}
                    autoComplete="off" style={{marginLeft: "10px"}}/>
            <button className="margin input" style={{background: "pink"}} type="submit">Submit</button>
        </form>
    )
}

export default NewJokeForm;