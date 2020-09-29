import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Professional from '../pages/Professional';
import Client from '../pages/Client';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/profissional" component={Professional}/>
            <Route path="/cliente" component={Client}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
