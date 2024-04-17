import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';



function Navbar() {

    const {toggleTheme} = useContext(Context)
    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <h1>Todo App</h1>

                <Link to="/"><button>Home</button></Link>

               <Link to= "/form"> <button>Add todo</button></Link>

               <Link to= "/todos"> <button>See todos</button></Link>

            </div>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}

export default Navbar;