const initialState = { id: null, errors: [], isLoggedIn: false }
const accountReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { id: action.id, isLoggedIn: true }
        case 'LOG_IN':
            return { id: action.id, isLoggedIn: true }
        case 'LOG_OUT':
            console.log('Logging Out, See ya!')
            return initialState
        case 'ERROR':
            return { ...state, errors: action.errors }
        default:
            return state
    }
}

export default accountReducer