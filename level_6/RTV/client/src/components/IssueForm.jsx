import { useState } from "react";


const initInputs = {
    title: "",
    content: ""
}
function IssueForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { addIssue } = props

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }
    const { title, content } = inputs
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="content"
                    value={content}
                    placeholder="Content"
                    onChange={handleChange}
                />
                <button>Post Issue</button>
            </form>
        </div>
    )
}

export default IssueForm