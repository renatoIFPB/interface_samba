import React from 'react';
import './css/Login.css';

import logo from '../assets/logo.svg';


export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="samba" id="Login-logo"/>
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