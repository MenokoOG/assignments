import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function CommentForm({ issueId, onCommentAdded }) {
    const [input, setInput] = useState("");
    const { addComment } = useContext(UserContext);

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addComment(issueId, input).then(newComment => {
            if (newComment) {
                onCommentAdded(newComment);
                setInput("");
            }
        }).catch(err => console.error("Failed to add comment:", err));
    }

    return (
        <div class="form-container">
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="comment"
      value={input}
      placeholder="Add a comment"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
</div>
    );
}

export default CommentForm;
