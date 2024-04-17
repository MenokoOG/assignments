import React, { useEffect, useContext } from 'react';
import { Context } from '../context/ContextProvider';


function Home() {

const{getTodos} = useContext(Context)
    useEffect(() => {
getTodos()
    }, [])

    return (
        <div className='main home'>
            <h1 className='home-header'>Home!</h1>
            <p>Welcome to our To-Do List App!</p>
            <p>This app helps you organize your tasks and stay productive.</p>
            <p>You can add your to-dos and see what others are doing as well!</p>
        </div>
    );
}

export default Home;