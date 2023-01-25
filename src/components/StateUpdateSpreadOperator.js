import React, { useState } from 'react'

const StateUpdateSpreadOperator = () => {

  const [value, setValue] = useState(
    {
      color: "red",
      model: "honda",
      engine: "heavy"
    }
  )
  const changeColor = () => {
    setValue(
      previousState => {
        return { ...previousState, color: "black" }
      }
    )
  }
  return (
    <div>
      <p>Car Color: {value.color}</p>
      <p>Car Model: {value.model}</p>
      <p>Car Engine: {value.engine}</p>
      <button onClick={changeColor}>Change Car Color</button>
    </div>
  )
}

export default StateUpdateSpreadOperator
