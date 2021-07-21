import React, { Component } from 'react'
import {connect} from "react-redux";

class LogInContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Log In</h1>
                    <h3>Log in to your account.</h3>
                </hgroup>
                <p>Form goes here</p>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const dispatch = ({})

export default connect(mapStateToProps, dispatch)(LogInContainer)