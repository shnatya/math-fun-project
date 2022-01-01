import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    background: "pink",
    color: "brown",
    width: "70px",
    padding: "8px",
    margin: "30px",
    borderRadius: "10px",
}

function Settings({ settings, setValue }) {

    const {min, max, operation} = settings

    function handleValue(event){
        setValue(event.target.name, event.target.value)
        console.log(event.target.value)
    }
    
    return (
        <div className="settings">
            
            <label className="lable">Min value: </label>
            <input style={{marginRight: "100px"}} onChange={handleValue} name="min" type="number" value={min} placeholder="Min value" />
            <label className="lable">Max value: </label>
            <input onChange={handleValue} name="max" type="number" value={max} placeholder="Max value" />
            <div style={{display: "grid"}} className="settings">
                <label style={{marginTop: "40px"}} className="lable">Choose an operation:</label>
                <select className="margin" onChange={handleValue} name="operation" value={operation} >
                    <option value="+">Addition</option>
                    <option value="-">Subtraction</option>
                    <option value="*">Multiplication</option>
                </select>
            </div>
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

