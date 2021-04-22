const INITIAL_STATE = { 
                            name: '',
                            email: '',
                            password: '',
                            repeat_password: '',
                            date_of_birth: '',
                            error: {
                                status: false,
                                message: ''
                            }
                        }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload, error: {...INITIAL_STATE.error}  }
        case 'DATE_BIRTH_CHANGED':
            return { ...state, date_of_birth: action.payload, error: {...INITIAL_STATE.error} }
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload, error: {...INITIAL_STATE.error}  }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload, error: {...INITIAL_STATE.error}  }
        case 'REPEAT_PASSWORD_CHANGED':
            return { ...state, repeat_password: action.payload, error: {...INITIAL_STATE.error}  }
        case 'ERROR_CHANGED':
            return { ...state, error: {...action.payload} }
        default:
            return state
    }
}