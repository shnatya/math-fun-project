import React from "react";

function Circle({obj}) {
  const {letter, min, max, total} = obj;
    return (
        <div className='border-joke'>
            <h1>{letter}</h1>
            <h1>💠</h1>
            <h1>{total}</h1>
        </div>
    )
}

export default Circle