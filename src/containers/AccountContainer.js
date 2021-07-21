import React, { Component } from 'react'
import { connect } from "react-redux";
import {UserInfo} from "../components/account/UserInfo";
import {Link} from "react-router-dom";

class AccountContainer extends Component {

    render() {
        const { isLoggedIn, user } = this.props
        if (isLoggedIn) {
            return <UserInfo user={user}/>
        } else {
            return (
                <div>
                    <Link to='/login'>Login</Link> or <Link to='/signup'>Sign Up</Link> to get started!
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.accountReducer.user,
    isLoggedIn: state.accountReducer.isLoggedIn
})

const dispatch = ({  })

export default connect(mapStateToProps, dispatch)(AccountContainer)