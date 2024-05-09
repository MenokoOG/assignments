import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function CommentList(props) {
    const {issueId} = props;
    const {allComments} = useContext(UserContext)
    const filteredComments = allComments.filter(comment => comment.issue === issueId)
    const commentElements = filteredComments.map(comment => {
        return (
            <>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
            </>
            
        )
    })

    console.log(filteredComments)
    return ( 
        <div>
            {commentElements}
        </div>
     );
}

export default CommentList;