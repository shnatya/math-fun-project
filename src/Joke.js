import React, { useEffect, useState } from "react";
import Letters from "./Letters";
import Answer from "./Answer";

function Joke({joke, settings}) {
    const [rightAsnwer, setRightAnswer] = useState(false)
    const [arrayOfObjectsForLetters, setarrayOfObjectsForLetters] = useState([])
    const [shuffledArray, setShuffledArray] = useState([])

    const {min, max, operation} = settings;
    const originalArrayOfLetters = joke.answer.split("")
    
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
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {index: index},
                                                   {max: maxNumber}, {total: sum}, {sign: "+"})
                return objectForLetterCard;
            }
            else if(operation === "-") {
                let diff = maxNumber - minNumber;
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {index: index}, 
                                                   {max: maxNumber}, {total: diff}, {sign: "-"})
                return objectForLetterCard;
            }
            else if(operation === "*") {
                let multi = maxNumber * minNumber;
                Object.assign(objectForLetterCard, {letter: letter}, {min: minNumber}, {index: index},
                                                    {max: maxNumber}, {total: multi}, {sign: "*"})
                return objectForLetterCard;
            }

        })
        setarrayOfObjectsForLetters(collectingObjects)

        //shuffle letters of answer/ shuffle collecting objects
        const shuffledArray = [...collectingObjects]
        const arrayLength = shuffledArray.length;
        console.log("I am here!")
        for(let i = arrayLength-1; i > 0; i--) {
            console.log("And here!")
            let j = Math.floor(Math.random() * (i + 1));
    
            let temperateVar = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temperateVar;
         }
        setShuffledArray(shuffledArray)

    }, [settings.min, settings.max, settings.operation]) 

    
    function checkTotal(answer, obj) {
        if(parseInt(answer) === obj.total) {
            console.log("Great!")
            setRightAnswer(true)
            return true
        }else{
            console.log("Oops!")
            setRightAnswer(false)
            return false
        }
    }
    
    return (
        <div className="border-joke"> 
            <h2>{joke.question}</h2>
            <Letters shuffledArray={shuffledArray} checkTotal={checkTotal} settings={settings}/>
            <Answer arrayOfObjectsForLetters={arrayOfObjectsForLetters}/>
        </div>
    )
}

export default Joke;