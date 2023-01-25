import React, { useState } from 'react'
const Content = () => {

  const [value, setValue] = useState(0);
  const ClickMe = () => {
    setValue(value + 1)
  }

  return (
    <div>
      <div className="container rounded">
        <p>Content Data</p>
        <h1>
          {value}
        </h1>
        <button
          onClick={ClickMe}>
          Click Me
        </button>
      </div>
    </div>
  )
}

export default Content
