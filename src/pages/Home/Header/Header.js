import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../Hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary  sticky-top">
                <div className="container-fluid">
                <Navbar.Brand href="/">Car Bazar.com</Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Nav.Link as={HashLink} to ="/home">Home</Nav.Link>
                        </li>
                        <li className="nav-item">
                        <Nav.Link as={HashLink} to ="/explore">Explore</Nav.Link>
                        </li>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>
                            :
                            <li className="nav-item">
                        <Nav.Link as={HashLink} to ="/login">Login</Nav.Link>
                        </li>}
                    </ul>
                    </div>
                </div>
                <div className="container">
                <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                   </Navbar.Collapse>
                </div>
                </nav>
    </>
    );
};

export default Header;