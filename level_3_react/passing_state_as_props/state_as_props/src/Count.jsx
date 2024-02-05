import React from "react";

function Count(props){
    console.log("Count component rendered")
    return (
        <div className="counter--count">
                <h1>{props.number}</h1>
            </div>
    )
}

export default Count