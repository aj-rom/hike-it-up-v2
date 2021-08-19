export const BACKEND_URL = 'http://localhost:3001/'
export const handleError = error => ({ type: 'ERROR', error: error })

export const getHeader = (method = 'GET', body) => {
    return {
        method: method,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
}