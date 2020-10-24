import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { faCaretDown } from"@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AppNavigation.css'

const AppNavigation = () => {
    return (
        <div className="container sticky-top bg-white px-5">
            <Navbar expand="lg">
                <NavLink to="/" className="text-decoration-none">
                    <h1>Coursify</h1>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/home">Boards</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/donation">Books</NavLink>
                        <div class="dropdown my-2">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3" to="/home">Exams <FontAwesomeIcon className='mr-2' icon={faCaretDown} /></NavLink>
                            <div class="dropdown-content">
                                <a href="#">Board Exams</a>
                                <a href="#">JEE Mains & Advanced</a>
                                <a href="#">NEET</a>
                            </div>
                        </div>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/contact">Why  Us</NavLink>
                        <button className='btn btn-danger'>Sign up</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AppNavigation;