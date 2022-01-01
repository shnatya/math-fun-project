import React, { useEffect, useState } from "react";
import Letters from "./Letters";
import Answer from "./Answer";

function Joke({joke, settings}) {
    const [rightAnswer, setRightAnswer] = useState(false)
    const [arrayOfObjectsForLetters, setarrayOfObjectsForLetters] = useState([])
    const [shuffledArray, setShuffledArray] = useState([])

    const {min, max, operation} = settings;
    const originalArrayOfLetters = joke.answer.split("")
    
    console.log("rightAsnwer:")
    console.log(rightAnswer)

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
        debugger
        if(parseInt(answer) === obj.total) {
            debugger
            console.log("Great!")
            setRightAnswer(true)
        }else{
            debugger
            console.log("Oops!")
            setRightAnswer(false)
        }
        debugger
    }
    return (
        <div className="border-joke"> 
            <h2>{joke.question}</h2>
            <Letters shuffledArray={shuffledArray} checkTotal={checkTotal} settings={settings}/>
            <Answer arrayOfObjectsForLetters={arrayOfObjectsForLetters} rightAnswer={rightAnswer}/>
        </div>
    )
}

export default Joke;