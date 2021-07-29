import React, { Component } from 'react'
import { connect } from "react-redux";
import {UserInfo} from "../components/account/UserInfo";
import {Link} from "react-router-dom";

class AccountContainer extends Component {

    render() {
        const { isLoggedIn, user } = this.props
        if (isLoggedIn) {
            return <UserInfo user_id={user.id}/>
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
    user: state.accountReducer.user,
    isLoggedIn: state.accountReducer.isLoggedIn
})

const dispatch = ({  })

export default connect(mapStateToProps, dispatch)(AccountContainer)