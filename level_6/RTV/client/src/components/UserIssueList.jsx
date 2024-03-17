import Issues from "./Issues";

function UserIssueList(props) {
    const { issues } = props;

    function sortIssues(a, b) {
        const upvotesA = a.upvote?.length || 0;
        const upvotesB = b.upvote?.length || 0;

        if (upvotesA === upvotesB) {
            return 0;
        } else {
            return upvotesA > upvotesB ? -1 : 1;
        }
    }

    const filteredIssues = issues.filter(issue => !!issue);

    filteredIssues.sort(sortIssues);

    const issueList = filteredIssues.map((issue, index) => (
        <Issues
            key={`${issue._id}-${index}`} 
            title={issue.title}
            description={issue.description}
            upvote={issue.upvote}
            downvote={issue.downvote}
            upVoteIssue={props.upVoteIssue}
            downVoteIssue={props.downVoteIssue}
            _id={issue._id}
        />
    ));

    return (
        <div>
            {issueList}
        </div>
    );
}

export default UserIssueList;
