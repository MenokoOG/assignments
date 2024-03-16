import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const IssueContext = React.createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function IssueProvider(props) {

    const initIssue = {
        issues: []
    };

    const [issueState, setIssueState] = useState(initIssue);
    const [commentState, setCommentState] = useState([]);

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        issues: []
    };

    const [userState, setUserState] = useState(initState);

    // Get all issues
    function getIssues(){
        userAxios.get("/api/issue/user")
        .then(res => setIssueState(prevState => ({
            ...prevState,
            issues: res.data
        })))
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Get issues for logged-in user
    function getUserIssues() {
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }));
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Get comments for an issue
    function getCommentsForIssue(issueId) {
        userAxios.get(`/api/issue/${issueId}/comments`)
            .then(res => setCommentState(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Post comment to an issue
    function postCommentToIssue(issueId, newComment) {
        userAxios.post(`/api/issue/${issueId}/comments`, newComment)
            .then(res => {
                setCommentState(prevComments => [...prevComments, res.data]);
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Upvote an issue
    function upVoteIssue(issueId) {
        userAxios.put(`/api/issue/upVote/${issueId}`)
            .then(res => {
                setIssueState(prevState => 
                    prevState.issues.map(issue => 
                        issue._id === issueId ? { ...issue, upvote: issue.upvote + 1 } : issue
                    )
                );
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Downvote an issue
    function downVoteIssue(issueId) {
        userAxios.put(`/api/issue/downVote/${issueId}`)
            .then(res => {
                setIssueState(prevState => 
                    prevState.issues.map(issue => 
                        issue._id === issueId ? { ...issue, downvote: issue.downvote + 1 } : issue
                    )
                );
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Post issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Update issue
    function putIssue(updatedIssue) {
        userAxios.put(`/api/issue/${updatedIssue.id}`, updatedIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: prevState.issues.map(issue => issue.id === updatedIssue.id ? res.data : issue)
                }));
            })
            .catch(err => console.log(err.response.data.errMsg));
    }

    // Delete issue
    function deleteIssue(issueId) {
        userAxios.delete(`/api/issue/${issueId}`)
            .then(() => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: prevState.issues.filter(issue => issue.id !== issueId)
                }));
            })
            .catch(err => console.log(err.response.data.errMsg));
    }

    useEffect(() => {
        getIssues();
        getUserIssues(); // Fetch user-specific issues
    }, []);

    return (
        <div>
            <IssueContext.Provider
                value={{
                    ...userState,
                    issueState,
                    commentState,
                    getIssues,
                    getUserIssues,
                    getCommentsForIssue,
                    postCommentToIssue,
                    addIssue,
                    putIssue,
                    deleteIssue,
                    upVoteIssue,
                    downVoteIssue
                }}>
                {props.children}
            </IssueContext.Provider>
        </div>
    );
}
