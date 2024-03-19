import { createContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export const UserContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

function UserProvider(props) {
    const navigate = useNavigate(); 

    const userFromStorage = localStorage.getItem('user');
    const user = (userFromStorage && userFromStorage !== "undefined") ? JSON.parse(userFromStorage) : null;

    const initState = {
        user: user,
        token: localStorage.getItem('token') || "",
        issues: [],
        errMsg: ''
    };

    const [userState, setUserState] = useState(initState);
    const [allIssues, setAllIssues] = useState([]);

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    async function login(credentials) {
        try {
            const res = await axios.post("/auth/login", credentials);
            const { user, token } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            getAllIssues();
            getUserIssues();
            setUserState(prevUserState => ({
                ...prevUserState,
                user, token
            }));
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            issues: []
        })
        navigate('/'); // Navigate to '/' after logout
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    function getAllIssues() {
        userAxios.get('/api/issues')
            .then(res => {
                console.log('Fetched issues:', res.data); // Check the logged data
                setAllIssues(res.data);
            })
            .catch(err => console.log(err));
    }

    function getUserIssues() {
        userAxios.get('/api/issues/user')
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                issues: [...prevUserState.issues, ...res.data]
            })))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post('/api/issues', newIssue)
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

    function upKeepIssues() {
        getUserIssues()
        getAllIssues()
    }

    function upVoteIssue(issueId) {
        userAxios.put(`/api/issues/upVote/${issueId}`)
            .then(res => {
                // Assume res.data contains the updated issue
                setAllIssues(prevIssues => prevIssues.map(issue => 
                    issue._id === res.data._id ? res.data : issue
                ));
            })
            .catch(err => console.error(err));
    }
    

    function downVoteIssue(issueId) {
        userAxios.put(`/api/issues/downVote/${issueId}`)
            .then(res => {
                // Assume res.data contains the updated issue
                setAllIssues(prevIssues => prevIssues.map(issue => 
                    issue._id === res.data._id ? res.data : issue
                ));
            })
            .catch(err => console.error(err));
    }

    // Function to add a comment to an issue
    function addComment(issueId, comment) {
        return userAxios.post(`/api/comment/${issueId}`, { comment })
            .then(res => res.data) // Ensure this returns the new comment
            .catch(err => {
                console.error(err);
                return null;
            });
    }
// Function to fetch comments for a specific issue
function getCommentsForIssue(issueId) {
    return userAxios.get(`/api/comment/${issueId}`) // Make sure to return this promise
        .then(res => {
            console.log("Fetched comments", res.data);
            return res.data; // Important: Return the data so it can be used by the component that called this function.
        })
        .catch(err => {
            console.error(err);
            return []; // Return an empty array or handle the error appropriately.
        });
}
    

    return (
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
                downVoteIssue,
                addComment, 
                getCommentsForIssue
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider