import Navbar from './components/Navbar'
import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute'
import PublicIssueList from "./components/PublicIssueList"



function App() {
  const { token, logout, allIssues, upKeepIssues, upVoteIssue, downVoteIssue } = useContext(UserContext)


  useEffect(() => {
        upKeepIssues()
    }, [])
  

  return (
    <div className="App">
      
      {token && <Navbar logout= {logout}/>}

      <Routes>

        <Route path='/' element = { token ? <Navigate to='/profile' /> : <Auth />} />

        <Route path='/profile' 
        element = {
          <ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>}/>

        <Route path= '/issues' 
        element = {<ProtectedRoute token={token}>
          <PublicIssueList allIssues={allIssues} upKeepIssues= {upKeepIssues} upVoteIssue={upVoteIssue} downVoteIssue= {downVoteIssue}/>
        </ProtectedRoute>}/>

      </Routes>
    </div>
  )
}

export default App
