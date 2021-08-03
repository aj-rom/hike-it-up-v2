import {BACKEND_URL, handleError} from "../shared/constants";

export const logOut = () => ({ type: 'LOG_OUT'})

export const authenticate = (data) => {
    const user = { user: data }
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

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
export const deleteUser = (id) => {
    return dispatch => {
    //    Remove the user
    }
}
