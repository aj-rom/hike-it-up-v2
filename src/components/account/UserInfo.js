import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUser } from "../../actions/userActions";
import { loading } from "../../shared/loading";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/accountActions";

export class UserInfo extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user_id)
    }

    handleLogOut = e => {
        e.preventDefault()
        this.props.logOut()
        alert('You have been logged out.')
    }

    getSignOutButton = () => {
        return <button onClick={this.handleLogOut}>Sign Out</button>
    }

    handleDeleteAccount = e => {
        e.preventDefault()

        const user = { id: this.props.user_id, auth_token: this.props.auth_token }
        this.props.deleteUser(user)
        alert('You have successfully deleted your account.')
    }

    getDeleteAccountButton = () => {
        return <button className='contrast' onClick={this.handleDeleteAccount}>Delete Account</button>
    }

    render() {
        const { error, isLoaded, user } = this.props

        if (error) {
            return <div className='error'>{error}...</div>;
        } else if(!isLoaded) {
            return loading
        }
        return (
            <article>
                <hgroup>
                    <h2>{user.email}</h2>
                    <h4>{user.trail_count}</h4>
                </hgroup>
                <p>Start Posting new trails <Link to={'/trails/new'}>here</Link></p>

                <div className='grid'>
                    {this.getSignOutButton()}
                    {this.getDeleteAccountButton()}
                </div>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.userReducer.errors,
        isLoaded: state.userReducer.isLoaded,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, ({ fetchUser, logOut }))(UserInfo)