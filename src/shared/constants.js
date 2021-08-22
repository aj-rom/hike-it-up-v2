export const BACKEND_URL = 'https://hike-it-up-v2.herokuapp.com/'
export const handleError = error => ({ type: 'ERROR', error: error })

export const getHeader = (method = 'GET', body) => {
    return {
        method: method,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
}