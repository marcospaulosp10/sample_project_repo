import { combineReducers } from 'redux'
import loginReducer from '../login/loginReducer'
import booksReducer from '../books/booksReducer'
import registerReducer from '../register/registerReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    books: booksReducer,
    register: registerReducer,
})

export default rootReducer