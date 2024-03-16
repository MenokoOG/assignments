import React, { useState, useContext } from 'react'
import { IssueContext } from '../context/IssueProvider'


const initInputs = {
    comment: ""
}

function CommentForm() {
    const [ inputs, setInputs ] = useState(initInputs)
    const { addComment } = initInputs

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }

      function handleSubmit(e){
        e.preventDefault()
        addComment(inputs)
        setInputs(initInputs)
      }

const {comment} = inputs
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="content"
                value={comment}
                placeholder="comment"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default CommentForm