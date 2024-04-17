import React, { createContext, useState } from 'react';
import axios from 'axios'

export const Context = createContext()


export const ContextProvider = (props) => {

    const baseUrl = 'https://api.vschool.io/workshop/todo'
    
    const [todos, setTodos] = useState([])
// console.log(todos)
    const [isDarkMode, setIsDarkMode] = useState(false)

    function getTodos(){
        axios.get(baseUrl)
        .then(res => setTodos(res.data))
        .catch(err => console.log(err))
    }

    function addTodo(newTodo){
        axios.post(baseUrl, newTodo)
        .then(res => setTodos(prevTodos => [...prevTodos, res.data]))
        .catch(err => console.log(err))
    }

    function toggleTheme(){
        setIsDarkMode(prev => !prev)
    }



    return(
        <Context.Provider value={{isDarkMode, toggleTheme, getTodos, todos, addTodo}}>
{props.children}
        </Context.Provider>
    )
}