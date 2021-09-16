import React from 'react'
import {connect} from "react-redux";
import TrailInput from "../components/trails/TrailInput";
import {editTrail} from "../actions/trailActions";
import { useHistory } from 'react-router-dom'

const TrailEditContainer = (props) => {
    const history = useHistory()

    return (
        <React.Fragment>
            <hgroup>
                <h1>Edit {props.trail.name}</h1>
                <h3>Change information regarding this trail.</h3>
            </hgroup>
            <TrailInput history={history} auth_token={props.auth_token} createTrail={props.editTrail} trail={props.trail} submitValue='Edit Trail'/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth_token: state.accountReducer.auth_token,
    trail: state.trailsReducer.trail
})

export default connect( mapStateToProps, ({ editTrail }))(TrailEditContainer)