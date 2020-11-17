import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Client from '../pages/Client';
import CalendarClient from '../pages/CalendarClient';
import Professional from '../pages/Professional';
import ServiceForm from '../pages/ServiceForm';
import ServiceImagem from '../pages/Professional/imagem.js';
import CalendarProfessional from '../pages/CalendarProfessional';

import { isAuthenticated } from '../services/auth';
import { userIsProfessional } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
      {...rest}
      render={props =>
        (isAuthenticated() && userIsProfessional()) ? (
         <Component {...props} />
       ) : (
         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
       )
     }
     />
   );

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
            <PrivateRoute path="/profissional" component={Professional} exact/>
            <PrivateRoute path="/profissional/servico" component={ServiceForm}/>
            <PrivateRoute path="/profissional/imagem" component={ServiceImagem}/>
            <PrivateRoute path="/profissional/servicosAgendados" component={CalendarProfessional}/>
            {/* client */}
            <Route path="/cliente" component={Client} exact/>
            <Route path="/cliente/servicosAgendados" component={CalendarClient}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
