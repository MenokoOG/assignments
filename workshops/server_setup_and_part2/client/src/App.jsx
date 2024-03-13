import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [allPosts, setAllPosts] = useState([])

  function getPosts() {
    axios.get("/api/posts")
    .then(res => setAllPosts(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    getPosts()
  }, [])

  const postList = allPosts.map(post => {
    return (
      <div key={post._id}> 
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.formattedDate}</p> 
      </div>
    )
  })
  return (
    <>
      {postList}
    </>
  )
}

export default App
