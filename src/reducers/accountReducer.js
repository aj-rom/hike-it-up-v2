const initialState = { id: null, errors: [], isLoggedIn: false }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { id: action.id, isLoggedIn: true }
        case 'LOG_IN':
            return { id: action.id, isLoggedIn: true }
        case 'ERROR':
            return { ...state, errors: action.errors }
        case 'LOG_OUT':
        default:
            return initialState
    }
}

export default accountReducer