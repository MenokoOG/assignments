import AuthForm from "./AuthForm"
import { useState, useContext } from 'react'
import { UserContext } from "../context/UserProvider.jsx"

const initInputs = {username: "", password: ""}

function Auth(){

    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev  => !prev)
        resetAuthErr()
    }

    return(
        <div className="auth-container">\
        <h1>Rock the Vote</h1>
            {!toggle && 
            <>
                <AuthForm 
                    inputs= {inputs}
                    handleChange = {handleChange}
                    handleSubmit = {handleSignup}
                    btnText = 'Sign Up'
                    errMsg = {errMsg}
                    />
                <p onClick={toggleForm}>Need to Login?</p>
            </>}

            {toggle && 
            <>
                <AuthForm 
                    inputs = {inputs}
                    handleChange = {handleChange}
                    handleSubmit= {handleLogin}
                    btnText = 'Log In'
                    errMsg = {errMsg}
                />
                <p onClick={toggleForm}>Need to Signup?</p>
            </>}
            
        </div>
    )
}

export default Auth