import React from 'react';
import { Route, Switch} from 'react-router-dom'


import Home from './home/Home'
import Sobre from './sobre/Sobre'

export default function Router () {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobre/:id?" component={Sobre} />

            <Route path="*" component={Home} />
        </Switch>
    );
}