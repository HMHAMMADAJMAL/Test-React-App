import React from 'react'
import './App.css'
import About from './components/About'
import Content from './components/Content'
import NavBar from './components/NavBar'
import SpreadOprator from './components/SpreadOprator'
import StateUpdateSpreadOperator from './components/StateUpdateSpreadOperator'
let name = 'Petrick'
const App = () => {
  return (
    <div className='body'>
      <NavBar />
      <About />
      <div className="container">
        <h3>Welcome ! {name}</h3>
        <div className="container">
          <p>Description soemthing like that </p>
        </div>
        <Content />
        <StateUpdateSpreadOperator />
        <SpreadOprator />
      </div>
    </div>
  )
}

export default App
