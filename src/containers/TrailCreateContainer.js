import React from 'react'
import TrailInput from "../components/trails/TrailInput";
import { connect } from "react-redux";
import {createTrail} from "../actions/trailActions";

const TrailCreateContainer = (props) => {
    return (
        <React.Fragment>
            <hgroup>
                <h1>Add a Trail</h1>
                <h3>Post trails you've been on!</h3>
            </hgroup>
            <TrailInput createTrail={props.createTrail}/>
        </React.Fragment>
    )
}

export default connect( null, ({ createTrail }))(TrailCreateContainer)