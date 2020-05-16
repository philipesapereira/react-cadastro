import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Herader() {
    return (
        <>
        <Navbar bg="dark">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                    <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Link>
            </Navbar.Brand>
        </Navbar>
      </>
    );
}