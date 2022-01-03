import React, { useEffect, useState } from "react";

function LetterCard({ obj, sendData, resetOn, handleReset }) {
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        if(resetOn === true){
            setInputValue("")
        }
    }, [resetOn])

    function onChange(event) {
        handleReset()
        sendData(event.target.value, obj)

        setInputValue(event.target.value)
    }
    return (
        <div className='margin border'>
            <form >
                <h1 className="font-letter">{obj.letter}</h1>
                <h2 className='margin font-letter'>{obj.max} {obj.sign} {obj.min}</h2>
                <input onChange={onChange} className='margin input' type="text" name="answer"
                                    autoComplete="off" placeholder="?" value={inputValue}/>
            </form>
        </div>
    )
}

export default LetterCard;