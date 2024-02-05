import React from "react"


function Header(props){
    
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

export default Header