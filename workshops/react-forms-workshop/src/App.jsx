import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import DataList from './components/DataList'

function App() {

  const [data, setData] = useState([])



  return (
    <div className='app'>

      <nav className='nav'>
        <h2>React Forms</h2>
        <h2>V School</h2>
      </nav>
      
      <div className='main'>
        <Form />

        <DataList data={data} />
      </div>

    </div>
  )
}

export default App
