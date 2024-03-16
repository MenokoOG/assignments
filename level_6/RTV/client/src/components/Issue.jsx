import React from 'react'

function Post(props) {
    console.log(props)
    const { title, content } = props
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Post