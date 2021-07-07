import React from 'react'

const Trail = (props) => {

    const { trail } = props
    return (
        <article id='trail'>
            <header>
                <h4>{trail.name}</h4>
            </header>
            <p>{trail.description}</p>
            <aside>
                <ul>
                    <li>{trail.open_hour} AM</li>
                    <li>{trail.close_hour} PM</li>
                </ul>
            </aside>
        </article>
    )
}

export default Trail