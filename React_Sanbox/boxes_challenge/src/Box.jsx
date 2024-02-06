import React from "react";

function Box(props){
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
    return (
        <div style={styles} className="box"></div>
    )
}

export default Box