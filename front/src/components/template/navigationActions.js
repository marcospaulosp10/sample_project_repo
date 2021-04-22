import { history } from '../main/history';
import axios from '../main/axiosConfig'
const URL = 'http://127.0.0.1:8000/api/logout'

export const logout = () => {
    return (dispatch) => {
        axios.post(`${URL}`)
            .then(resp => dispatch({ type: 'ERROR_CHANGED', payload: '' }, logoutProcess()))
        }
}

export const logoutProcess = () => {
        localStorage.removeItem('token',)
        history.push('/login')
}