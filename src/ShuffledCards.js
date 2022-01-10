import React from "react";
import Card from "./Card"

function ShuffledCards({ shuffledArray, checkTotal, resetOn, handleReset }) {
    function sendData(usersTotal, obj) {
        checkTotal(usersTotal, obj)
    } 
    return (
        <div className='flex-container'>
            {shuffledArray.map((obj, index) =>
                <Card obj={obj} key={index} sendData={sendData} resetOn={resetOn} handleReset={handleReset}/>)}
        </div>
    )
}
export default ShuffledCards;
