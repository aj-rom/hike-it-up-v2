import {BACKEND_URL} from "../shared/constants";

export const addTrail = trail =>({ type: 'ADD_TRAIL', trail: trail })
export const deleteTrail = id => ({ type: 'DELETE_TRAIL', id: id })

export const createTrail = trail => {
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(trail)
    }

    return (dispatch) => {

        function handleResponse(resp) {
            if (resp.id !== null) {
                dispatch({ type: 'ERROR', errors: resp })
            }
            else {
                dispatch({ type: 'ADD_TRAIL', trail: resp })
            }
        }

        return fetch(BACKEND_URL + 'trails', config)
            .then(resp => { return resp.json() })
            .then(resp => handleResponse(resp))
            .catch(error => dispatch({ type: 'ERROR', error: error }))
    }
}

export const fetchTrails = () => {
    return (dispatch) => {
        return fetch(BACKEND_URL + 'trails')
            .then(resp => { return resp.json() })
            .then(json => dispatch({ type: 'FETCH_TRAILS', trails: json }))
            .catch(error => dispatch({ type: 'ERROR', error: error }))
    }
}