import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';


export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="samba"/>
                <input
                    placeholder="Username"
                    type="text"
                />
                <input
                    placeholder="Password"
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}