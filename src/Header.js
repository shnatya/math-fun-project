import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    background: "pink",
    color: "brown",
    width: "150px",
    padding: "12px",
    marginBottom: "50px",
    marginLeft: "15px",
    borderRadius: "10px",
}

function Header() {

    return (
        <div className="bottom">
            <h1 className="font-fun-math font-size">
                Fun Math
            </h1>
            <NavLink
                to="/settings"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "palevioletred",
                }}
            >
                Settings
            </NavLink>
            <NavLink
                to="/addajoke"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "palevioletred",
                }}
            >
                Add a joke
            </NavLink>
        </div>
        
    )
}

export default Header;