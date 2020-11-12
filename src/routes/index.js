import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Client from '../pages/Client';
import CalendarClient from '../pages/CalendarClient';
import Professional from '../pages/Professional';
import ServiceForm from '../pages/ServiceForm';
import ServiceImagem from '../pages/Professional/imagem.js';
import CalendarProfessional from '../pages/CalendarProfessional';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            {/* landing */}
            <Route path="/" exact component={Landing}/>
            {/* auth */}
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={SignUp}/>
            {/* professional */}
            <Route path="/profissional" component={Professional} exact/>
            <Route path="/profissional/servico" component={ServiceForm}/>
            <Route path="/profissional/imagem" component={ServiceImagem}/>
            <Route path="/profissional/servicosAgendados" component={CalendarProfessional}/>
            {/* client */}
            <Route path="/cliente" component={Client} exact/>
            <Route path="/cliente/servicosAgendados" component={CalendarClient}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
