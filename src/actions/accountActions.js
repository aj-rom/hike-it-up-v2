import { BACKEND_URL } from "../shared/constants";
const URL = `${BACKEND_URL}users`

export const logOut = () => ({ type: 'LOG_OUT'})
export const logIn = (user) => {
    return dispatch => {
    //    Authenticate User from email & password
    //    Add to state
    }
}
export const deleteUser = (id) => {
    return dispatch => {
    //    Remove the user
    }
}
