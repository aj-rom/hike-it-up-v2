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
                <article>
                    <h3>Account</h3>
                    <p>
                        <Link to='/hike-it-up-v2/login'>Login</Link> or <Link to='/hike-it-up-v2/signup'>Sign Up</Link> to get started posting trails!
                        <br/>
                        Otherwise, feel free to check out all of the trails right <Link to='/hike-it-up-v2/trails'>here</Link>.
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