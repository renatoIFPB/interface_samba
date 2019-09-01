import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import home from './pages/Main';
import Formulario from './pages/Formulario';
import Groups from './pages/Groups'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={home}/>
            <Route path="/home/installation" exact component={Formulario}/>
            <Route path="/home/groups" exact component={Groups}/>
        </BrowserRouter>
        );
}