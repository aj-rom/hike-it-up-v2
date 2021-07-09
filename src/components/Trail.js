import React from 'react'

const Trail = (props) => {

    const { trail } = props
    return (
        <article className='trail-card'>
            <header>
                <hgroup>
                    <h3>{trail.name}</h3>
                    <h5>Open {trail.open_at} - {trail.close_at}</h5>
                </hgroup>
            </header>
            <p>{trail.description}</p>
        </article>
    )
}

export default Trail