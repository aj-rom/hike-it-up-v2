import {BACKEND_URL} from "../shared/constants";

export const addTrail = trail =>({ type: 'ADD_TRAIL', trail: trail })
export const deleteTrail = id => ({ type: 'DELETE_TRAIL', id: id })
export const fetchTrails = () => {
    return (dispatch) => {
        return fetch(BACKEND_URL + 'trails')
            .then(resp => { return resp.json() })
            .then(json => dispatch({ type: 'FETCH_TRAILS', trails: json.data }))
            .catch(error => dispatch({ type: 'ERROR', error: error }))

    }
}