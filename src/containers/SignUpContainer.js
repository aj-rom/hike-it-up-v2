import React, { Component } from 'react'
import {connect} from "react-redux";
import AuthForm from "../components/account/AuthForm";
import {signUp} from "../actions/accountActions";

class SignUpContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Sign Up</h1>
                    <h3>Create an Account to post new trails.</h3>
                </hgroup>
                <AuthForm includeConfirmation={true} onSubmit={this.props.signUp}/>
            </React.Fragment>
        )
    }
}

const dispatch = ({ signUp })

export default connect(null, dispatch)(SignUpContainer)