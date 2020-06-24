import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">GATOTKACA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Wisata
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink className="dropdown-item" to="/wisata">Pariwisata</NavLink>
                                <NavLink className="dropdown-item" to="/kuliner">Wisata Kuliner</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Berita
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink className="dropdown-item" to="/covid">Covid</NavLink>
                                <NavLink className="dropdown-item" to="/news">News</NavLink>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Navbar