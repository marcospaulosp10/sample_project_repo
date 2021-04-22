import { history } from '../main/history';
import axios from '../main/axiosConfig'
const URL = 'http://127.0.0.1:8000/api/login'

export const login = (e, email, password) => {
    e.preventDefault()
    return dispatch => {
        axios.post(`${URL}`,{email, password})
            .then(resp => dispatch({ type: 'ERROR_CHANGED', payload: resp }, 
                verifyToken(resp)
            ))
        }
}

export const verifyToken = (resp) => {
    if(resp.data.auth_token){
        localStorage.setItem('token', resp.data.auth_token)
        window.location.href=('/books')
    }
    return({ type: 'CLEAN', payload: '' })
}

export const changeEmail = (event) => {
    return({ type: 'EMAIL_CHANGED', payload: event.target.value })
}

export const setIsLoading = (event, varBool) => {
    return({ type: 'IS_LOADING_CHANGED', payload: varBool })
}

export const changePassword = (event) => {
    return({ type: 'PASSWORD_CHANGED', payload: event.target.value })
}

