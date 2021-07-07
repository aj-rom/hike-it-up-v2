import React from 'react'

const Trail = (props) => {

    const { trail } = props
    return (
        <article className='trail-card'>
            <header>
                <h4>{trail.name}</h4>
            </header>
            <p>{trail.description}</p>
            <aside>
                <ul>
                    <li>{trail.hour_open} AM</li>
                    <li>{trail.hour_close} PM</li>
                </ul>
            </aside>
        </article>
    )
}

export default Trail