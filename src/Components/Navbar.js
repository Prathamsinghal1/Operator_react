import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="#">Operacter</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={props.blue}>Blue</button>
          <button type="button" className="btn btn-outline-secondary btn-sm mx-2" onClick={props.grey}>Grey</button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={props.green}>Green</button>
          <button type="button" className="btn btn-outline-danger btn-sm mx-2" onClick={props.red}>Red</button>
          <button type="button" className="btn btn-outline-warning btn-sm" onClick={props.yellow}>Yellow</button>
          <button type="button" className="btn btn-outline-info btn-sm mx-2" onClick={props.cyan}>Cyan</button>
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={props.dark}>Dark</button>
        </div>
      </div>
    </nav>
  )
}


