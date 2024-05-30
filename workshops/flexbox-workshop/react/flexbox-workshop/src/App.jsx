import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1>Flex Box Workshop</h1>
        <h2>flex-direction</h2>
        <p style = {{width: "100%"}}>Controls the main axis of flex items within the container</p>
        <div className="flexbox-container direction">
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex-wrap</h2>
        <p style = {{width: "100%"}}>Defines whether flex items wrap onto multiple lines if they don't fit within the container </p>
        <div className='flexbox-container wrap'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex-flow</h2>
        <p style = {{width: "100%"}}>(Shorthand) Combines flex-direction and flex-wrap properties into one </p>

        <div className='flexbox-container flow'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>justify-content // align-items</h2>
        <p style = {{width: "100%"}}>Justify Content: Distributes flex items along the main axis of the container </p>
        <p style = {{width: "100%"}}>Align Items:  Aligns flex items along the cross axis of the container </p>

        <div className='flexbox-container justify'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>gap</h2>
        <p style = {{width: "100%"}}>Creates spacing between flex items in a row or column</p>
        <div className='flexbox-container gap'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>align-self</h2>
        <p style = {{width: "100%"}}>Allows individual flex items to override the default align-items value for the container</p>

        <div className='flexbox-container align'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex within flex</h2>
        <div className='flexbox-container flex-within'>
          <div className="five inner-one"> 
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
          </div>
          <div className="five inner-two"> 
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
