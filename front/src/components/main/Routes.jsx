import React from 'react'
import { Router, Route } from 'react-router-dom';
import { history } from '../main/history'
import Login from '../login/Login';
import Register from '../register/Register';
import Books from '../books/Books';
import Navigation from '../template/Navigation';
import PrivateRoute from './PrivateRoute'

export default props => (
<Router history={history}>
    <Navigation />
    <Route exact path="/" component={Login} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <PrivateRoute path='/books' component={Books} />
</Router>
)