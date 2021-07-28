const initialState = { user: { id: null, username: '', email: '', errors: []}, isLoggedIn: false }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            console.log('Attempting signup', action.user)
            return { user: action.user, isLoggedIn: true }
        case 'LOG_IN':
            console.log('Attempting login', action.user)
            return { user: action.user, isLoggedIn: true }
        case 'LOG_OUT':
            return initialState
        case 'ERROR':
            return { ...state, errors: action.errors }
        default:
            return state
    }
}

export default accountReducer