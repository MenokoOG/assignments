function Issues(props) {
    const { title, description, upvote, downvote, upVoteIssue, _id, downVoteIssue } = props;
    console.log('Props in Issues component:', props);

    return (
        <div className="post-container">
            <h2>{title}</h2>
            <h4>{description}</h4>

            <div className='vote-button-container'>
                <button onClick={() => upVoteIssue?.(_id)}>
                    <i className="fa-solid fa-thumbs-up"></i>
                </button>
                {/* Use optional chaining and provide a default value of 0 */}
                <p>{upvote?.length ?? 0}</p>

                <button onClick={() => downVoteIssue?.(_id)}>
                    <i className="fa-solid fa-thumbs-down"></i>
                </button>
                {/* Use optional chaining and provide a default value of 0 */}
                <p>{downvote?.length ?? 0}</p>
            </div>
        </div>
    );
}

export default Issues;
