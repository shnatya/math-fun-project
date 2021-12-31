import React from "react";

function Circle({obj}) {
  const {letter, min, max, total} = obj;
    return (
        <div>
            <h1>{letter}</h1>
            <h1>▁▁▁</h1>
            <h2>{total}</h2>
        </div>
    )
}

export default Circle