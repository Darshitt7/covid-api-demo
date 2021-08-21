import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="container-flud nav_bg mt-2">
        <div className="row">
            <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink activeClassName='menu_active' className="navbar-brand" to="#">
                            DarshitTarpara
                        </NavLink>
                        <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                        <NavLink activeClassName='menu_active' className="nav-link active"
                                        aria-current="page"
                                        to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to='/covid'>
                                    CovidCases
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to='/state'>
                                    StateCases
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to='/center'>
                                    VaccinationCenter
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home
