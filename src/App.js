import React from 'react'
import './App.css'
import About from './components/About'
import NavBar from './components/NavBar'
// import NavBar from './NavBar'
let name = ''
const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <NavBar />
      <About />
      <h3>Hello ! {name}</h3>
      <div className="container">
        <p>Description soemthing like that </p>
      </div>
    </div>
  )
}

export default App
