
import axios from '../main/axiosConfig'

const URL = '/api'

export const search = (pg = null) => {
    return dispatch => {
        var full_url = URL+'/books'
        full_url += pg?`?page=${pg}`:''
        axios.get(`${full_url}`, 
            {headers: {
                    'Authorization': `bearer ${localStorage.getItem('token')}`,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => dispatch({ type: 'BOOKS_CHANGED', payload: resp.data }))
        }
}

export const checkbook = (isbn, status) => {
    console.log(isbn, ' + ', status)
    return dispatch => {
        var full_url = URL
        axios.put(`${full_url}/checkbook`, {isbn, status},
            {headers: {
                    'Authorization': `bearer ${localStorage.getItem('token')}`,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => dispatch({ type: 'ERROR_CHANGED', payload: resp.data }))
            .then(resp => dispatch(search()))
        }
}

export const setIsbn = (event) => {
    return({ type: 'ISBN_CHANGED', payload: event.target.value })
}

export const closeModal = () => {
    return({ type: 'MODAL_CLOSED', payload: false })
}

export const setStatus = (event) => {
    return({ type: 'STATUS_CHANGED', payload: event.target.value })
}