import React from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
// import TextForm from './components/TextForm';
let name = 'Adrian';
const App = () => {
  return (
    <div>
      <NavBar title='News Blog' />
      <h6>Hello ! {name}</h6>
      <div className="container">
        <p>Description something like that </p>
      </div>
      <div className="container my-3">
        <About />
        {/* <TextForm heading='Here is Your Form ' /> */}
      </div>
    </div>
  )
}

export default App;
