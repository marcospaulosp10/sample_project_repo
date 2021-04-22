import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function CustomRoutes({...others}){
    let authenticated = localStorage.getItem('token')?true:false
    if(!authenticated){
        return <Redirect to='/login' />
    } 
    return <Route {...others} />
}

export default CustomRoutes
