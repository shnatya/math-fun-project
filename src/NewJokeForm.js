import React, { useState } from "react";

function NewJokeForm({ addNewJoke, isAdded }) {
    const [newJoke, setNewJoke] = useState({
        question: "",
        answer: "",
    })
    function onSubmit(event) {
        event.preventDefault()
        if((newJoke.question.length === 0) && (newJoke.answer.length === 0))  {
            alert("Your question and answer should have at least one letter.")
        }
        else if(newJoke.answer.length === 0) {
            alert("Your answer should have at least one letter.")
        }
        else if(newJoke.question.length === 0) {
            alert("Your question should have at least one letter.")
        }
        else{
            addNewJoke(newJoke)
        }
        setNewJoke({
            question: "",
            answer: "",
        })
    }
    function onChange(event) {
        setNewJoke({
            ...newJoke,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="margin input-joke" onChange={onChange} type="text" name="question"
                    placeholder="Type in your question ..." value={newJoke.question}
                    autoComplete="off" />
            <input className="margin input-joke" onChange={onChange} type="text" name="answer"
                    placeholder="Type in your answer ..." value={newJoke.answer}
                    autoComplete="off" style={{marginLeft: "10px"}}/>
            <button className="margin button-submit" style={{background: "pink"}} type="submit">Submit</button>
            {isAdded ? <h1 className="top" style={{visibility: "visible"}}>Done!</h1> : <h1 style={{visibility: "hidden"}}>Done!</h1>}
        </form>
    )
}
//
export default NewJokeForm;