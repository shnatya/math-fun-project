import React from "react";

function Settings() {
    function handleChangeValue(event){
        console.log(event.target.value)
    }
    function handleChangeOperation(event) {
        console.log(event.target.value)
    }
    function handleStart() {
        console.log("Start")
    }
    return (
        <div className="border margin">
            <label>Choose value:</label>
            <select onChange={handleChangeValue} name="value" className="margin">
                <option vallue="all">All</option>
                <option value="1 - 100">1 - 100</option>
                <option value="100 - 1000">100 - 1000</option>
                <option value="1000 - 10000">1000 - 10000</option>
            </select>

            <label>Choose an operation:</label>
            <select onChange={handleChangeOperation} name="operation" className="margin">
                <option value="all">All</option>
                <option value="addition">Addition</option>
                <option value="subtraction">Subtraction</option>
            </select>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default Settings;

