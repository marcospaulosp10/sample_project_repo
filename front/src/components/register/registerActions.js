
import axios from '../main/axiosConfig'

const URL = '/api/register'

export const register = (e, name, email, password, repeat_password) => {
    e.preventDefault()
    if(password !== repeat_password){
        return({ type: 'ERROR_CHANGED', payload: {status: 'error', message: "Passwords don't match"} })
    } else {
        return dispatch => {
            dispatch(registerProcess(name, email, password))
        }
    }
}

export const registerProcess = (name, email, password, repeat_password) => {
    return dispatch => {
        axios.post(`${URL}`,{ name, email, password})
            .then(resp => dispatch({ type: 'ERROR_CHANGED', payload: {...resp.data} },
            console.log(resp)
            ))
        }
}

export const changeName = (event) => {
    return({ type: 'NAME_CHANGED', payload: event.target.value })
}

export const changeDateOfBirth = (event) => {
    return({ type: 'DATE_BIRTH_CHANGED', payload: event.target.value })
}

export const changeEmail = (event) => {
    return({ type: 'EMAIL_CHANGED', payload: event.target.value })
}

export const changePassword = (event) => {
    return({ type: 'PASSWORD_CHANGED', payload: event.target.value })
}

export const changeRepeatPassword = (event) => {
    return({ type: 'REPEAT_PASSWORD_CHANGED', payload: event.target.value })
}

