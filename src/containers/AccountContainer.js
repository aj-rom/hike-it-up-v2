import React, { Component } from 'react'
import { connect } from "react-redux";
import UserInfo from "../components/account/UserInfo";
import { Link } from "react-router-dom";
import { deleteUser, fetchUser } from "../actions/userActions";
import {logOut} from "../actions/accountActions";

class AccountContainer extends Component {

    render() {
        const { isLoggedIn } = this.props
        if (isLoggedIn) {
            return <UserInfo
                user_id={this.props.id}
                logOut={this.props.logOut}
                fetchUser={this.props.fetchUser}
                deleteUser={this.props.deleteUser}
                auth_token={this.props.auth_token}
            />
        } else {
            return (
                <article>
                    <h3>Account</h3>
                    <p>
                        <Link to='/login'>Login</Link> or <Link to='/signup'>Sign Up</Link> to get started posting trails!
                        <br/>
                        Otherwise, feel free to check out all of the trails right <Link to='/trails'>here</Link>.
                    </p>
                </article>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.accountReducer.isLoggedIn,
    id: state.accountReducer.id,
    auth_token: state.accountReducer.auth_token
})

export default connect(mapStateToProps, { fetchUser, deleteUser, logOut })(AccountContainer)