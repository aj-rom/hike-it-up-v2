import React from 'react'
import TrailInput from "../components/trails/TrailInput";
import { createTrail } from "../actions/trailActions";
import { connect } from "react-redux";

const TrailCreateContainer = () => {
    return (
        <React.Fragment>
            <hgroup>
                <h1>Add a Trail</h1>
                <h3>Post trails you've been on!</h3>
            </hgroup>
            <section>
                <TrailInput createTrail={this.props.createTrail}/>
            </section>
        </React.Fragment>
    )
}

const dispatch = ({ createTrail })

export default connect( null, dispatch)(TrailCreateContainer)