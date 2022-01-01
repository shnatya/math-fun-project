import React from "react";

function Circle({ obj }) {
  const {letter, total} = obj;
    return (
        <div>
            {obj.rightAnswer ? <h1 className="font letter-bottom">{letter}</h1> : null}
            <h1 style={{color: "palevioletred"}} className="dash-top">▁▁▁</h1>
            <h2 className="font">{total}</h2>
        </div>
    )
}

export default Circle