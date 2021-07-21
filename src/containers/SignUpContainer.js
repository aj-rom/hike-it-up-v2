import React, { Component } from 'react'
import {connect} from "react-redux";

class SignUpContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Sign Up</h1>
                    <h3>Create an Account to post new trails.</h3>
                </hgroup>
                <p>Form goes here</p>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const dispatch = ({})

export default connect(mapStateToProps, dispatch)(SignUpContainer)