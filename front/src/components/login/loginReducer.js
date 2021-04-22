const INITIAL_STATE = { 
                            email: '',
                            password: '',
                            error: {
                                status: false,
                                message: ''
                            },
                            isLoading: false
                        }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload, error: { status: false, message: ''} }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload, error: { status: false, message: ''}  }
        case 'ERROR_CHANGED':
            return { ...state, error: {...action.payload.data} }
        case 'IS_LOADING_CHANGED':
            return { ...state, isLoading: action.payload }
        case 'CLEAN':
            return { ...INITIAL_STATE }
        default:
            return state
    }
}