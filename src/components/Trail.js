import React from 'react'

const Trail = (props) => {

    const { trail } = props
    return (
        <article className='trail-card'>
            <header>
                <h4>{trail.name}</h4>
                <h5>Open {trail.open_at} - {trail.close_at} </h5>
            </header>
            <p>{trail.description}</p>
        </article>
    )
}

export default Trail