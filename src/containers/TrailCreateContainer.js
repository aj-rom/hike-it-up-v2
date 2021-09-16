import React from 'react'
import TrailInput from "../components/trails/TrailInput";
import { connect } from "react-redux";
import {createTrail} from "../actions/trailActions";
import {useHistory} from "react-router-dom";

const TrailCreateContainer = (props) => {
    const history = useHistory()

    return (
        <React.Fragment>
            <hgroup>
                <h1>Add a Trail</h1>
                <h3>Post trails you've been on!</h3>
            </hgroup>
            <TrailInput history={history} auth_token={props.auth_token} createTrail={props.createTrail} submitValue='Create Trail'/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth_token: state.accountReducer.auth_token
})

export default connect( mapStateToProps, ({ createTrail }))(TrailCreateContainer)