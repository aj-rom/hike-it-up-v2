const initialState = {
    trail: {},
    trails: [],
    query: '',
    isLoaded: false,
    errors: []
}

const trailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING_TRAILS':
            return { ...state, trails: state.trails, isLoaded: false }
        case 'ADD_TRAIL':
            return { ...state, trails: [...state.trails, action.trail], isLoaded: true, errors: [] }
        case 'FETCH_TRAILS':
            return { ...state, trails: action.trails, isLoaded: true, errors: []}
        case 'LOADING_TRAIL':
            return { ...state, trail: state.trail, isLoaded: false }
        case 'FETCH_TRAIL':
            return { ...state, trail: action.trail, isLoaded: true, errors: []}
        case 'ERROR':
            return { ...state, errors: action.errors, isLoaded: false }
        default:
            return state
    }
}

export default trailsReducer