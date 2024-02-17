import React, {useState} from "react"
import Button from './components/Button';
import Header from './components/Header';
import {ThemeContextProvider} from "./components/ThemeContext"

function App(props) {

    
    return (
        <>
            <ThemeContextProvider>
                <Header/>
                <Button/>
            </ThemeContextProvider>
        </>
    );
}

export default App;