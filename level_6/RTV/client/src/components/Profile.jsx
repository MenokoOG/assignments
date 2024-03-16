import React, { useContext } from 'react';
import IssueForm from './IssueForm.jsx';
import IssueList from './IssueList';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import { UserContext } from '../context/UserProvider.jsx';
import { IssueContext } from '../context/IssueProvider.jsx';

function Profile() {
    const { user: { username } } = useContext(UserContext);
    const { issueState, upVoteIssue, downVoteIssue, postCommentToIssue } = useContext(IssueContext);
    const { issues } = issueState;

    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <h3>Add An Issue</h3>
            <IssueForm />
            <h3>Your Issues</h3>
            <IssueList 
                issues={issues} 
                onUpVote={upVoteIssue} 
                onDownVote={downVoteIssue}
                onPostComment={postCommentToIssue} 
            />
        </div>
    );
}

export default Profile;
