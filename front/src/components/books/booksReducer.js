const INITIAL_STATE = { list: [],
                            isbn: '',
                            status: '',
                            error: {
                                status: false,
                                message: '',
                                openModal: false
                            }
                        }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BOOKS_CHANGED':
            return { ...state, list: action.payload }
        case 'ISBN_CHANGED':
            return { ...state, isbn: action.payload }
        case 'STATUS_CHANGED':
            return { ...state, status: action.payload }
        case 'ERROR_CHANGED':
            return { ...state, error: action.payload }
        case 'MODAL_CLOSED':
            return { ...state, error: {...INITIAL_STATE.error} }
        default:
            return state
    }
}
