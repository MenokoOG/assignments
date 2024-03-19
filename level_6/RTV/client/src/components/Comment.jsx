import React from 'react';

function Comment({ comment }) {
    return (
        <div className='comment-content'>
            <p>{comment}</p>  
        </div>
    );
}

export default Comment;
