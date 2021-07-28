import {BACKEND_URL, handleError} from "../shared/constants";

export const logOut = () => ({ type: 'LOG_OUT'})

export const signUp = (data) => {
    const user = { user: data }
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp.errors.length > 0) {
                dispatch({ type: 'ERROR', errors: resp.errors})
            } else {
                dispatch({ type: 'SIGN_UP', user: resp })
            }
        }

        return fetch(`${BACKEND_URL}sign_up`, config)
            .then(resp => resp.json())
            .then(json => handleResponse(json))
            .catch(e => handleError(e))
    }
}
export const logIn = (data) => {
    const user = { user: data }
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp.errors.length > 0) {
                dispatch({ type: 'ERROR', errors: resp.errors})
            } else {
                dispatch({ type: 'LOG_IN', user: resp })
            }
        }

        return fetch(`${BACKEND_URL}sign_in`, config)
            .then(e => e.json())
            .then(e => handleResponse(e))
            .catch(e => handleError(e))
    }
}
export const deleteUser = (id) => {
    return dispatch => {
    //    Remove the user
    }
}
