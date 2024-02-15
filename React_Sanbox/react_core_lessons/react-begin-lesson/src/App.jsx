import { useState } from 'react'
import MyButton from './components/MyButton'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import TwoButtons from './components/TwoButtons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Welcome to Menoko OG's React Practice</h1>
      <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
      <MyButton />
      <Profile />
      <ShoppingList />
      <TwoButtons />
      </div>
      
    </>
  )
}

export default App
