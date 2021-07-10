import React from 'react'

export default function TrailInspect(props) {
    const { trail } = props

    return (
        <article>
            <header>
                <hgroup>
                    <h1>{trail.name}</h1>
                    <h2>{trail.open_at} {trail.close_at}</h2>
                </hgroup>
            </header>
            <section>
                <h4>Description</h4>
                <p>{trail.description}</p>
            </section>
            <section>
                <h4>Images</h4>
            </section>
            <footer>
                <p>Reviews/Ratings?</p>
            </footer>
        </article>
    )
}