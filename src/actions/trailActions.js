import {BACKEND_URL, getHeader, handleError} from "../shared/constants";
const TRAILS_URL = `${BACKEND_URL}trails/`
export const addTrail = trail => ({ type: 'ADD_TRAIL', trail: trail })

export const editTrail = (trail, auth_token) => {

    const body = { trail: trail, auth_token: auth_token }
    const header = getHeader('PATCH', body)

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp.id !== undefined) {
                dispatch({ type: 'UPDATE_TRAIL', trail: resp })
            } else {
                dispatch({ type: 'ERROR', errors: resp })
            }
        }

        fetch(TRAILS_URL + trail.id, header)
            .then(resp => resp.json())
            .then(resp => handleResponse(resp))
            .catch(e => handleError(e))
    }
}

export const deleteTrail = (trail, auth_token) => {
    const body = { trail: trail, auth_token: auth_token }
    const header = getHeader('DELETE', body)

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp._status === 200) {
                dispatch({ type: 'DELETE_TRAIL', id: resp.trail.id })

            } else {
                dispatch({ type: 'ERROR', errors: resp })
            }
        }

        fetch(TRAILS_URL + trail.id, header)
            .then(resp => resp.json())
            .then(resp => handleResponse(resp))
            .catch(e => handleError(e))
    }
}


export const createTrail = (trail, auth_token) => {
    delete trail.errors
    const body = { trail: trail, auth_token: auth_token}
    const header = getHeader('POST', body)

    return (dispatch) => {

        function handleResponse(resp) {
            if (resp.id === undefined) {
                dispatch({ type: 'ERROR', errors: resp })
            }
            else {
                dispatch({ type: 'ADD_TRAIL', trail: resp })
            }
        }

        return fetch(TRAILS_URL, header)
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

export const fetchTrail = id => {
    return dispatch => {
        function handleResponse(json) {
            if (json.error) {
                dispatch({ type: 'ERROR', errors: [json.error] })
            }
            else {
                dispatch({ type: 'FETCH_TRAIL', trail: json })
            }
        }

        return fetch(TRAILS_URL + id)
            .then(resp => resp.json())
            .then(json => handleResponse(json))
            .catch(error => handleError(error))
    }
}