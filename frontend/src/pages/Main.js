import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';

import { IoMdHome } from "react-icons/io";
import { IoMdConstruct } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import './css/Main.css';

export default function Main(){
    return(
        <div className="Main-container">
            <Navbar bg="secundary" variant="light" fixed="top" className="shadow">
            <Navbar.Brand href="/Main">
                <img src={logo} alt="samba" id="Main-logo"/>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home"><IoMdHome/> Home</Nav.Link>
                <Nav.Link href="/home/installation"><IoMdConstruct/> Installation</Nav.Link>
                <Nav.Link href="/Main"><FaUserFriends/> Groups</Nav.Link>
                <Nav.Link href="/Main"><FaUsers/> Users</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/"><FaSignOutAlt/> Logout</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    );
}
