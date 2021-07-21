const initialState = { user: { id: null, username: '', email: ''}, isLoggedIn: false }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { user: action.user, isLoggedIn: true }
        case 'LOG_OUT':
            return initialState
        default:
            return state
    }
}

export default accountReducer