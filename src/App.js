import React from 'react'
import './App.css'
import About from './components/About'
import Content from './components/Content'
import NavBar from './components/NavBar'
import SpreadOprator from './components/SpreadOprator'
import StateUpdateSpreadOperator from './components/StateUpdateSpreadOperator'
let name = ''
const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <h3>Welcome ! {name}</h3>
      <div className="container">
        <p>Description soemthing like that </p>
      </div>
      <Content />
      <StateUpdateSpreadOperator />
      <SpreadOprator />
    </div>
  )
}

export default App
