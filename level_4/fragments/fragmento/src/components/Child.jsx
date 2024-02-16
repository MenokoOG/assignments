import React from "react"
import Grandchild from "./Grandchild"

function Child() {
    return (
        // react fragments make the component now siblings within the dom and no longer child or grandchild in DOM tree.
        <>  
            <h1>I'm the Child component</h1>
            <Grandchild />
        </>
    )
}

export default Child