const initialState = {
    user: {
        email: '',
        trail_count: null
    },
    error: '',
    isLoaded: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return { ...state, isLoaded: false }
        case "SET_USER":
            return { ...state, user: action.user, isLoaded: true }
        case "ERROR":
            return { ...state, error: action.error }
        case "RESET":
        default:
            return state
    }

}

export default userReducer