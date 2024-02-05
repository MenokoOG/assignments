import React from "react"
import Body from "./Body"
import Header from "./Header"
import { useState } from "react"


function App() {
  const [user, setUser] = useState("Menoko OG")

  return (
    <main>
            <Header user={user}/>
            <Body user={user}/>
        </main>
  )
}

export default App
