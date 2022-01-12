import React, { useEffect, useState } from "react";

function Card({ obj, sendData, resetOn }) {
    const [inputValue, setInputValue] = useState("");
    const { min, max, sign, letter, rightAnswer } = obj;

    useEffect(() => {
        if(resetOn === true){
            setInputValue("")
        }
    }, [resetOn])

    function onChange(event) {
        sendData(event.target.value, obj)

        setInputValue(event.target.value)
    }
    return (
        <div className='margin border'>
            <form >
                {rightAnswer ? <h1 className="right-answer">{letter}</h1>
                                  : <h1 className="wrong-answer">{letter}</h1>}
                {rightAnswer ? <h2 className='margin right-answer'>{max} {sign} {min}</h2>
                             : <h2 className='margin wrong-answer'>{max} {sign} {min}</h2>}
                <input onChange={onChange} className='margin input' type="text" name="answer"
                                    autoComplete="off" placeholder="?" value={inputValue}/>
            </form>
        </div>
    )
}

export default Card;