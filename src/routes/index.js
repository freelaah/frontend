import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Professional from '../pages/Professional';
import Client from '../pages/Client';
import SignUp from '../pages/SignUp';
import CalendarClient from '../pages/CalendarClient';
import CalendarProfessional from '../pages/CalendarProfessional';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/profissional" component={Professional} exact/>
            <Route path="/cliente/servicosAgendados" component={CalendarClient}/>
            <Route path="/profissional/servicosAgendados" component={CalendarProfessional}/>
            <Route path="/cliente" component={Client}/>
            <Route path="/cadastro" component={SignUp}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
