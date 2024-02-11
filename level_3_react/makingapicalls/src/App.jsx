import { useState } from 'react'


function App() {
  const [starWarsData, setStarWarsData] = useState({})

  // this causes render infinite :

  // fetch("https://swapi.dev/api/people/1")
  //       .then(res => res.json())
  //       .then(data => setStarWarsData(data))

  console.log("Component rendered")


  fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
  )
}

export default App
