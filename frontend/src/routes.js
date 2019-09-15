import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Groups from './pages/Groups'

export default function Routes(){

    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={Main}/>
            <Route path="/home/groups" exact component={Groups}/>
        </BrowserRouter>
        );
}