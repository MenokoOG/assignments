import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function Issues(props) {
    const { title, description, upvote, downvote, upVoteIssue, downVoteIssue, _id } = props;
    const { getCommentsForIssue } = useContext(UserContext);
    const [comments, setComments] = useState([]);

    const onCommentAdded = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
    };

    useEffect(() => {
        if (_id) {
            getCommentsForIssue(_id)
                .then(fetchedComments => {
                    setComments(fetchedComments);
                })
                .catch(error => console.error("Error fetching comments:", error));
        }
    }, [_id, getCommentsForIssue]);

    return (
        <div className="post-container">
            <h2>{title}</h2>
            <h4>{description}</h4>

            <div className='vote-button-container'>
                <button onClick={() => upVoteIssue(_id)}>Upvote</button>
                <span>{typeof upvote === 'number' ? upvote : upvote?.length ?? 0}</span>

                <button onClick={() => downVoteIssue(_id)}>Downvote</button>
                <span>{typeof downvote === 'number' ? downvote : downvote?.length ?? 0}</span>
            </div>

            <CommentForm issueId={_id} onCommentAdded={onCommentAdded} />
            <CommentList comments={comments} />
        </div>
    );
}

export default Issues;
