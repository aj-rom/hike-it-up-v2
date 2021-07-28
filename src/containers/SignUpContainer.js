import React, { Component } from 'react'
import {connect} from "react-redux";
import LogInForm from "../components/account/LogInForm";
import {signUp} from "../actions/accountActions";

class SignUpContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Sign Up</h1>
                    <h3>Create an Account to post new trails.</h3>
                </hgroup>
                <LogInForm includeConfirmation={true} onSubmit={this.props.signUp}/>
            </React.Fragment>
        )
    }
}

const dispatch = ({ signUp })

export default connect(null, dispatch)(SignUpContainer)