import React from 'react'
export const ErrorField = (props) => {

    const { errors } = props
    return (
        <ul id='errors'>
            {errors.map((e, idx) => <li key={idx}>{e}</li>)}
        </ul>
    )
}
