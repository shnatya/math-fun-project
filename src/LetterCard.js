import React from "react";

function LetterCard({obj, sendData}) {

    function onChange(event) {
        console.log(event.target.value)
        sendData(event.target.value, obj)
    }
    return (
        <div className='margin border'>
            <form >
                <h1>{obj.letter}</h1>
                <h2 className='margin'>{obj.max} {obj.sign} {obj.min}</h2>
                <input onChange={onChange} className='margin input' type="text" name="answer" size='10' placeholder="?"/>
            </form>
        </div>
    )
}

export default LetterCard;