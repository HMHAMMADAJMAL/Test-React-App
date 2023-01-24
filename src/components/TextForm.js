import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('Enter Text Here')
  const handleCLick = () => {
    setText(text);
  }
  const handleonChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <form>
        <h1 className="classnams">
        </h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      </form>
      <div>
        <h6>
          {props.heading}--- {text}
          <textarea htmlFor='any'
            onChange={handleonChange}
            value={text} row='8'>
          </textarea>
        </h6>
        <h5>
          {text}
        </h5>
      </div>
      <button onClick={handleCLick}
        className="btn btn-primary">
        Convert to Uppercase
      </button>
      {text.split(" ").length} words and {text.length}length
    </div>
  )
}

export default TextForm
