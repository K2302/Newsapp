import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="#">News Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/sport">Sport</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Health">Health</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
