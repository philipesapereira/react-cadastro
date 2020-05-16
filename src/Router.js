import React from 'react';
import { Route, Switch} from 'react-router-dom'


import ListaContato from './contato/ListaContato'
import Sobre from './sobre/Sobre'

export default function Router () {
    return (
        <Switch>
            <Route path="/" exact={true} component={ListaContato} />
            <Route path="/sobre/:id?" component={Sobre} />

            <Route path="*" component={ListaContato} />
        </Switch>
    );
}