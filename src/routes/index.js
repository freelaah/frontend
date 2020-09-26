import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/cadastrar" exact component={SignUp} />
        </BrowserRouter>
    )
}

export default Routes;
