import React from "react";

function LetterCard({ obj, sendData, resetOn, handleReset }) {
    function onChange(event) {
        handleReset()
        sendData(event.target.value, obj)
    }
    return (
        <div className='margin border'>
            <form >
                <h1 className="font">{obj.letter}</h1>
                <h2 className='margin font'>{obj.max} {obj.sign} {obj.min}</h2>
                {resetOn ? <input onChange={onChange} className='margin input' type="text" name="answer"
                                    autoComplete="off" placeholder="?" value=""/>
                        : <input onChange={onChange} className='margin input' type="text" name="answer" 
                                    autoComplete="off" placeholder="?"/>}
            </form>
        </div>
    )
}

export default LetterCard;