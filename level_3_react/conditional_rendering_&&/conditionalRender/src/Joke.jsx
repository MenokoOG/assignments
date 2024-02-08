
import { useState } from "react";

function Joke(props){
    const[isShown, setIsShown] = useState(false)

    const toggleIsShown = () => {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3 className="setup-el">{props.setup}</h3>}
            {isShown && <p className="punch-el">{props.punchline}</p>}
            <button onClick={toggleIsShown} className="button">{isShown ? "Hide" : "Show"} Punchline</button>
            
            <hr />
        </div>
    )
}

export default Joke