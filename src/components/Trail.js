import React from 'react'

export default function Trail() {
    const { trail } = this.props

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