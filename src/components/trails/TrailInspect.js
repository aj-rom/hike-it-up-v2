import React from 'react'
import TrailLocation from "./TrailLocation";
import {Link, useHistory} from "react-router-dom";

export default function TrailInspect(props) {
    const { trail, isOwner } = props
    let history = useHistory()

    const handleDelete = (e) => {
        e.preventDefault()
        props.delete(trail, props.auth_token)
        alert('Trail has been deleted.')
        history.push('/trails')
    }

    function trailOwnerActions() {
        if (isOwner) {
            const editButton = <Link to={`/trails/${trail.id}/edit`}><button>Edit Information</button></Link>
            const deleteButton = <button className='contrast' onClick={handleDelete}>Delete Trail</button>

            return (
                <section>
                    <h4>Manage</h4>
                    <div className='grid'>{editButton}{deleteButton}</div>
                </section>
            )
        }
    }

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
            {trailOwnerActions()}
        </article>
    )
}