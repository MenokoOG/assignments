import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider.jsx';
import IssueForm from './IssueForm.jsx';
import UserIssueList from './UserIssueList.jsx';
// import CommentForm from './CommentForm.jsx';
// import CommentList from './CommentList.jsx';



function Profile() {
    const { user, addIssue, issues, upVoteIssue, downVoteIssue } = useContext(UserContext);

    // Check if user is null or undefined
    if (!user) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    // Destructure the username property separately
    const { username } = user;
    return (
        <div>
            <div className="profile-container">
                <h1>Hello There {username}!</h1>
                <h3>Add An Issue</h3>
                <IssueForm addIssue = {addIssue} />
            </div>
            <div className="profile-post-container">
                <h3>Your Issues</h3>
                <UserIssueList
                    issues={issues}
                    onUpVote={upVoteIssue}
                    onDownVote={downVoteIssue}
                // onPostComment={postCommentToIssue} 
                /></div>
        </div>



    );
}

export default Profile;
