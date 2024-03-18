import { useEffect } from "react"
import Issues from "./Issues"



function PublicIssueList(props){

    const { allIssues, upVoteIssue, downVoteIssue } = props

    function sortIssues(a, b){
        if( a.upvote.length === b.upvote.length ){
            return 0
        } else if (a.upvote.length > b.upvote.length){
            return -1
        } else {return 1}
    }

    allIssues.sort(sortIssues)

    const issuesMap = allIssues.map(issue => {
        return <Issues 
            {...issue}
            key = {issue._id}
            upVoteIssue= {upVoteIssue}
            downVoteIssue= {downVoteIssue}
        />
    })

    return(
        <div className="public-container">
            <h1>Top Issues</h1>
            {issuesMap}
        </div>
    )
}

export default PublicIssueList