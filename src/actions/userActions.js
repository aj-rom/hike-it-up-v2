import {BACKEND_URL, getHeader, handleError} from "../shared/constants";

export const fetchUser = (id) => {
    return (dispatch) => {

        dispatch({type: 'LOADING'})

        function handleResponse(resp) {
            if(resp.errors) {
                dispatch({type: 'ERROR', error: resp.error})
            } else {
                dispatch({ type: 'SET_USER', user: resp})
            }
        }

        return fetch(`${BACKEND_URL}users/${id}`)
            .then(resp => resp.json())
            .then(resp => handleResponse(resp))
    }
}

export const deleteUser = (user) => {
    const header = getHeader('DELETE', user)
    return (dispatch) => {

        function handleResponse(resp) {
            if (resp.errors) {
                dispatch({ type: 'ERROR', errors: resp.errors })
            } else {
                dispatch({ type: 'LOG_OUT'})
            }
        }

        return fetch(`${BACKEND_URL}users/${user.id}`, header)
            .then(e => handleResponse(e))
            .catch(e => handleError(e))
    }
}
