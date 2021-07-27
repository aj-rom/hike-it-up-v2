import React, { Component } from 'react'
import {connect} from "react-redux";
import LogInForm from "../components/account/LogInForm";
import {logIn} from "../actions/accountActions";

class LogInContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <hgroup>
                    <h1>Log In</h1>
                    <h3>Log in to your account.</h3>
                </hgroup>
                <article>
                    <LogInForm onSubmit={this.props.logIn} includeConfirmation={false}/>
                </article>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const dispatch = ({ logIn })

export default connect(mapStateToProps, dispatch)(LogInContainer)