import React from "react";

function Circle({obj, rightAsnwer}) {
  const {letter, total} = obj;
  debugger
    return (
        <div>
            {rightAsnwer ? <h1>{letter}</h1> : null}
            <h1>▁▁▁</h1>
            <h2>{total}</h2>
        </div>
    )
}

export default Circle