import {BACKEND_URL, getHeader, handleError} from "../shared/constants";

export const logOut = () => ({ type: 'LOG_OUT'})

export const authenticate = (data) => {
    const user = { user: data }
    const config = getHeader('POST', user)

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp.errors) {
                dispatch({ type: 'ERROR', errors: resp.errors})
            } else {
                dispatch({ type: 'LOG_IN',  id: resp.id, auth_token: resp.auth_token })
            }
        }

        return fetch(`${BACKEND_URL}sign_in`, config)
            .then(e => e.json())
            .then(e => handleResponse(e))
            .catch(e => handleError(e))
    }
}

export const signUp = (data) => {
    const user = { user: data }
    const header = getHeader('POST', user)

    return (dispatch) => {
        function handleResponse(resp) {
            if (resp.errors) {
                dispatch({ type: 'ERROR', errors: resp.errors})
            } else {
                dispatch({ type: 'LOG_IN',  id: resp.id, auth_token: resp.auth_token })
            }
        }

        return fetch(`${BACKEND_URL}sign_up`, header)
            .then(e => e.json())
            .then(e => handleResponse(e))
            .catch(e => handleError(e))
    }
}