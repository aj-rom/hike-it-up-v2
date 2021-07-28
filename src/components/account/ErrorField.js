import React from 'react'
export const ErrorField = (props) => {

    const { errors } = props
    return (
        <ul id='errors'>
            {errors.map(e => <li>{e}</li>)}
        </ul>
    )
}
