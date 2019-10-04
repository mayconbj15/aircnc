import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import New from '../pages/New'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> { /*garante que apenas uma rota vai ser executada por vez*/ }
                <Route path="/" exact component={ Login }></Route> { /* exact para ir exatamente a url / */ }
                <Route path="/dashboard" component={ Dashboard }></Route>
                <Route path="/new" component={ New }></Route>
            </Switch>
        </BrowserRouter>
    );
}

