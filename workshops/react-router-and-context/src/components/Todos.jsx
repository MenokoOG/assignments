import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider';




function Todos() {

const {todos} = useContext(Context)
console.log(todos)
    const [fakeData, setFakeData] = useState([
        {
            title: 'test title 1',
            description: 'test description 1',
            price: 'test price 1'
        },
        {
            title: 'test title 2',
            description: 'test description 2',
            price: 'test price 2'
        },
    ])

    const todoList = todos.map(data => {
        return (
            <div className='single-todo'>
                <h3>Title: {data.title}</h3>
                <h3>Description: {data.description}</h3>
                <h3>Price: {data.price}</h3>
            </div>
        )
    })


    return (
        <div className='main todos'>
            <h1 className='todo-header'>The todos!</h1>
            {todoList}
        </div>
    );
}

export default Todos;