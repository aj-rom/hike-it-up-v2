import {BACKEND_URL, handleError} from "../shared/constants";

export const addTrail = trail => ({ type: 'ADD_TRAIL', trail: trail })
export const deleteTrail = id => ({ type: 'DELETE_TRAIL', id: id })

const TRAILS_URL = `${BACKEND_URL}trails`
export const createTrail = (trail, auth_token) => {
    const body = { trail: trail, auth_token: auth_token}
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(trail)
    }

    return (dispatch) => {

        function handleResponse(resp) {
            if (resp.id !== null) {
                dispatch({ type: 'TRAIL_ERROR', errors: resp })
            }
            else {
                dispatch({ type: 'ADD_TRAIL', trail: resp })
            }
        }

        return fetch(TRAILS_URL, config)
            .then(resp => { return resp.json() })
            .then(resp => handleResponse(resp))
            .catch(error => handleError(error))
    }
}

export const fetchTrails = () => {
    return (dispatch) => {

        function handleResponse(json) {
            if (json.errors) {
                return dispatch({ type: 'ERROR', errors: json.errors })
            } else {
                return dispatch({ type: 'FETCH_TRAILS', trails: json })
            }
        }
        return fetch(TRAILS_URL)
            .then(resp => resp.json() )
            .then(json => handleResponse(json))
            .catch(error => handleError(error))
    }
}

const TRAIL_URL = BACKEND_URL + 'trails/'

export const fetchTrail = id => {
    return dispatch => {
        function handleResponse(json) {
            if (json.error) {
                dispatch({ type: 'TRAIL_ERROR', errors: [json.error] })
            }
            else {
                dispatch({ type: 'FETCH_TRAIL', trail: json })
            }
        }

        return fetch(TRAIL_URL + id)
            .then(resp => resp.json())
            .then(json => handleResponse(json))
            .catch(error => handleError(error))
    }
}