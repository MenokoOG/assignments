import { createContext, useState } from "react";
import axios from 'axios'


export const UserContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


 function UserProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "", 
        issues: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)

    const [allIssues, setAllIssues] = useState([])


    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user, token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    async function login(credentials){
        try {
            const res = await axios.post("/auth/login", credentials);
            const { user, token} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            getAllIssues();
            getUserIssues();
            setUserState(prevUserState => ({
                ...prevUserState,
                user, token
            }));
        } catch (error) {
            // Handle login error here
            console.error("Login failed:", error);
            // Optionally, you can set an error message in the state to display to the user
            // setError("Login failed. Please try again.");
        }
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        })
        )
    }

    function getAllIssues(){
        userAxios.get('/issues')
        .then(res => setAllIssues(res.data))
        .catch(err => console.log(err))
      }

    function getUserIssues(){
        userAxios.get('/issues/user')
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                issues: [...prevUserState.issues, ...res.data]
            })))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function addIssue(newIssue){
        userAxios.post('/issues', newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
                setAllIssues(prevIssues => ([
                    ...prevIssues,
                    res.data
                ]))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function upKeepIssues(){
        getUserIssues()
        getAllIssues()
    }

    function upVoteIssue(issueId){
        userAxios.put(`/issues/upVote/${issueId}`)
        .then(res => {
            console.log(res.data)
            setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
            setUserState(prevUserState => ({...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data)}))
        })
        .catch(err => console.log(err))
    }

    function downVoteIssue(issueId){
        userAxios.put(`/issues/downVote/${issueId}`)
    .then(res => {
        setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? post : res.data))
        setUserState(prevUserState => ({...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data)}))
    })
        .catch(err => console.log(err))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                
                signup,
                login,
                logout,
                addIssue, 
                resetAuthErr,
                allIssues,
                upKeepIssues,
                upVoteIssue,
                downVoteIssue
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider