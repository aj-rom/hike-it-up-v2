import React from 'react'
import TrailLocation from "./TrailLocation";

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
                <h4>Location</h4>
                <TrailLocation address={trail.formatted_address}/>
            </section>
        </article>
    )
}