import React from 'react'

 function Comment() {
    const {comment} = props
    return (
        <div className='comment-content'>
          <p>{comment}</p>  
        </div>
    )
}
export default Comment