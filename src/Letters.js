import React, { useEffect, useState } from "react";
import LetterCard from "./LetterCard"

function Letters({ shuffledArray, checkTotal, resetOn, handleReset }) {
    function sendData(answer, obj) {
        checkTotal(answer, obj)
    } 
    return (
        <div className='flex-container'>
            {shuffledArray.map((obj, index) =>
                <LetterCard obj={obj} key={index} sendData={sendData} resetOn={resetOn} handleReset={handleReset}/>)}
        </div>
    )
}
export default Letters;
