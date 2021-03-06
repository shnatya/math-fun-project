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

function Settings({ settings, updateSettings }) {
    const { min, max, operation } = settings

    function handleValue(event){
        updateSettings(event.target.name, event.target.value)
    }
    
    return (
        <div className="settings">
            
            <label className="label">Min value: </label>
            <input onChange={handleValue} name="min" type="number" value={min} placeholder="Min value" style={{marginRight: "100px"}} />
            <label className="label">Max value: </label>
            <input onChange={handleValue} name="max" type="number" value={max} placeholder="Max value" />
            <div style={{display: "grid"}} className="settings">
                <label style={{marginTop: "40px"}} className="label">Choose an operation:</label>
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

