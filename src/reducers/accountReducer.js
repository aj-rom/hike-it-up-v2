const initialState = { id: null, auth_token: '', errors: [], isLoggedIn: false }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { id: action.id, auth_token: action.auth_token, isLoggedIn: true }
        case 'ERROR':
            return { ...state, errors: action.errors }
        case 'LOG_OUT':
            localStorage.clear()
            return { ...initialState }
        default:
            return state
    }
}

export default accountReducer