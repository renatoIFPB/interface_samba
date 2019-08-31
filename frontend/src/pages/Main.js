import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import './Main.css';

export default function Main(){
    return(
        <div className="Main-container">
            <Navbar bg="secundary" variant="light" fixed="top" className="shadow">
            <Navbar.Brand href="/Main">
            <img src={logo} alt="samba"/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Main">Home</Nav.Link>
                <Nav.Link href="/Main">Install</Nav.Link>
                <Nav.Link href="/Main">Groups</Nav.Link>
                <Nav.Link href="/Main">Users</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    );
}