import React from 'react'
import {connect} from "react-redux";
import TrailInput from "../components/trails/TrailInput";
import {editTrail} from "../actions/trailActions";

const TrailEditContainer = (props) => {
    return (
        <React.Fragment>
            <hgroup>
                <h1>Edit {props.trail.name}</h1>
                <h3>Change information regarding this trail.</h3>
            </hgroup>
            <TrailInput auth_token={props.auth_token} createTrail={props.editTrail} trail={props.trail} submitValue='Edit Trail'/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth_token: state.accountReducer.auth_token,
    trail: state.trailsReducer.trail
})

export default connect( mapStateToProps, ({ editTrail }))(TrailEditContainer)