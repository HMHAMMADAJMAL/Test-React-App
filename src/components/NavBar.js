import React from 'react';
import PropTypes from 'prop-types';
const NavBar = (props) => {
  return (
    <div className='' style={{ marginBottom: "20px" }}>
      <nav className=" rounded-center d-flex flex-col navbar navbar-expand-lg bg-body-tertiary">
        <div className="d-flex flex-col container-fluid">
          <a className="d-flex  flex-col navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="w-25  bg-secondary rounded d-flex justify-content-between collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" mt-20 rounded-center navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" rounded-center  d-flex flex-row nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav >
    </div >
  )
}
NavBar.propTypes =
{
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
NavBar.defaultProps =
{
  title: "News Blog",
  about: "About Page"
}
export default NavBar
