import React from 'react'
import {Link} from "react-router-dom";

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
            <Link to={`/hike-it-up-v2/trails/${trail.id}`}>More Info</Link>
        </article>
    )
}

export default Trail