import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    background: "pink",
    color: "brown",
    width: "70px",
    padding: "8px",
    margin: "0 6px 6px",
    "border-radius": "10px",
}

function Settings({setValue}) {

    function handleValue(event){
        setValue(event.target.name, event.target.value)
        console.log(event.target.value)
    }
    
    return (
        <div className="border margin">
            
            <input onChange={handleValue} name="min" type="number" placeholder="Min value" />
            <input onChange={handleValue} name="max" type="number" placeholder="Max value" />

            <label>Choose an operation:</label>
            <select onChange={handleValue} name="operation" className="margin">
                <option value="+">Addition</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
            </select>
            <NavLink
            exact
            to="/joke"
            style={linkStyles}
            activeStyle={{background: "palevioletred",}}>
                Start
            </NavLink>
        </div>
    )
}

export default Settings;

