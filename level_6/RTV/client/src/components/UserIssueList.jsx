import Issues from "./Issues"


function UserIssueList(props){

    const {issues} = props

    function sortIssues(a, b){
        // Use optional chaining with ?. and default to 0 if undefined
        const upvotesA = a.upvote?.length || 0;
        const upvotesB = b.upvote?.length || 0;
    
        if( upvotesA === upvotesB ){
            return 0;
        } else {
            return upvotesA > upvotesB ? -1 : 1;
        }
    }

    issues.sort(sortIssues)


    const issueList = issues.map(issue => {
        return <Issues
            {...issue}
            key = {issue._id}
        />
    })
    
    return(
        <div>
            {issueList}
        </div>
    )
}

export default UserIssueList