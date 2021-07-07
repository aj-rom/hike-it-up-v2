const trailsReducer = ( state = { trails: [], isLoaded: false, error: null }, action) => {
    switch(action.type) {
        case 'LOADING_TRAILS':
            return { ...state, trails: state.trails, isLoaded: false }
        case 'ADD_TRAIL':
            return { ...state, trails: [...state.trails, action.trail], isLoaded: true }
        case 'FETCH_TRAILS':
            return { ...state, trails: action.trails, isLoaded: true}
        case 'ERROR':
            return { ...state, error: action.error, isLoaded: false }
        default:
            return state
    }
}

export default trailsReducer