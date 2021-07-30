import React, { Component } from 'react'
import {connect} from "react-redux";
import AuthForm from "../components/account/AuthForm";
import {logIn} from "../actions/accountActions";
import { Link } from "react-router-dom";

class LogInContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Log In</h1>
                    <h3>Log in to your account or <Link to={'/signup'}>Sign Up</Link> to get started.</h3>
                </hgroup>
                <AuthForm onSubmit={this.props.logIn} includeConfirmation={false}/>
            </React.Fragment>
        )
    }
}

const dispatch = ({ logIn })

export default connect(null, dispatch)(LogInContainer)