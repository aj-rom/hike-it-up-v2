import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUser } from "../../actions/userActions";
import { loading } from "../../shared/loading";

export class UserInfo extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user_id)
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
                    <h4>{user.trail_count} Trails</h4>
                </hgroup>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State for mapping', state)
    return {
        errors: state.userReducer.errors,
        isLoaded: state.userReducer.isLoaded,
        user: state.userReducer.user
        }
}

export default connect(mapStateToProps, ({ fetchUser }))(UserInfo)