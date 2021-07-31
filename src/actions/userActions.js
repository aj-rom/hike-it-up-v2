import {BACKEND_URL} from "../shared/constants";

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