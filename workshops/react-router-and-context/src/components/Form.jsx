import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider';


function Form() {

const {addTodo} = useContext(Context)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        addTodo(formData)
    }

    return ( 
        <div className='main form-container'>
            <h1 className='form-header'>Add a todo!</h1>
            <form onSubmit={handleSubmit} className='form'>
                <h3>What needs done?</h3>
                <input 
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Title'                
                />

                <input 
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    placeholder='Description'                
                />

                <input 
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    placeholder='Price'                
                />

                <button>Submit!</button>
            </form>
        </div>
     );
}

export default Form;