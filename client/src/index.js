import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './pages/products';
import Cameras from './pages/cameras';
import Accessories from './pages/accessories';
import Tripods from './pages/tripods';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <>
        <Switch>
            
            <Route path='/products/cameras' component={Cameras} />
            <Route path='/products/accessories' component={Accessories} />
            <Route path='/products/tripods' component={Tripods} />
            <Route path='/products' component={Products} />
            <Route path='/' component={App} />

        </Switch>
        </>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
