import React, { useEffect, useState } from "react";
import Letters from "./Letters";
import Answer from "./Answer";

function Joke({ joke, settings, handleNextJoke, resetOn, handleReset }) {

    const [arrayOfObjectsForLetters, setArrayOfObjectsForLetters] = useState([])
    const [shuffledArray, setShuffledArray] = useState([])

    const {min, max, operation} = settings;
    const {answer, question, id} = joke;
    const originalArrayOfLetters = answer.split("")

    useEffect(() =>{
        const collectingObjects = originalArrayOfLetters.map((letter, index) => {
            //make objects for each letter and collect them in one array
            const objectForLetterCard = {}
            
            const number1 = Math.floor(Math.random()*(max-min) + parseInt(min))
            const number2 = Math.floor(Math.random()*(max-min) + parseInt(min))
        
            const maxNumber = Math.max(number1, number2)
            const minNumber = Math.min(number1, number2)
    
            if(operation === "+") {
                let sum = minNumber + maxNumber;
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {id: index},
                                                   {max: maxNumber}, {total: sum}, {sign: "+"}, {rightAnswer: false})
                return objectForLetterCard;
            }
            else if(operation === "-") {
                let diff = maxNumber - minNumber;
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {id: index}, 
                                                   {max: maxNumber}, {total: diff}, {sign: "-"}, {rightAnswer: false})
                return objectForLetterCard;
            }
            else if(operation === "*") {
                let multi = maxNumber * minNumber;
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {id: index},
                                                    {max: maxNumber}, {total: multi}, {sign: "*"}, {rightAnswer: false})
                return objectForLetterCard;
            }

        })
        setArrayOfObjectsForLetters(collectingObjects)

        //shuffle letters of answer/ shuffle collecting objects (Fisher-Yates algorithm)
        const shuffledArray = [...collectingObjects]
        const arrayLength = shuffledArray.length;

        for(let i = arrayLength-1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
    
            let temperateVar = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temperateVar;
         }
        setShuffledArray(shuffledArray)
    }, [min, max, operation, id]) 

    function onClick() {
        handleNextJoke();
    }
    //check answer, if right, show letter
    function checkTotal(answer, obj) {
        if(parseInt(answer) === obj.total) {
            const workingArray = arrayOfObjectsForLetters.map(objLetter => {
                if(obj.id === objLetter.id){
                    return {
                        ...objLetter,
                        rightAnswer: true,
                    }
                }else return objLetter;
            })
            setArrayOfObjectsForLetters(workingArray)
        }
    }
    return (
        <>
            <h1 className="arrow" onClick={onClick}>&#11157;</h1>
            <div className="border-joke"> 
                <h1 className="font">{question}</h1>
                <Letters shuffledArray={shuffledArray} checkTotal={checkTotal} settings={settings}
                         resetOn={resetOn} handleReset={handleReset}/>
                <Answer arrayOfObjectsForLetters={arrayOfObjectsForLetters} />
            </div>
        </>
    )
}

export default Joke;