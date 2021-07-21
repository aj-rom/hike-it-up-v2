const initialState = { user: { id: null, username: '', email: ''} }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { user: action.user }
        case 'LOG_OUT':
            return initialState
        default:
            return state
    }
}

export default accountReducer