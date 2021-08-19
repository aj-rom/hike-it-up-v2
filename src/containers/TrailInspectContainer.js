import React, { Component } from 'react'
import {deleteTrail, editTrail, fetchTrail} from "../actions/trailActions";
import { connect } from "react-redux";
import {Link, withRouter} from 'react-router-dom'
import TrailInspect from "../components/trails/TrailInspect";
import {loading} from "../shared/loading";

class TrailInspectContainer extends Component {


    componentDidMount() {
        let { id } = this.props.match.params
        this.props.fetchTrail(id)
    }

    render() {
        const { errors, isLoaded, trail } = this.props;
        if (errors.length > 0) {
            return <article>
                <hgroup>
                    <h3>An Error Has Occurred</h3>
                    <h5>{errors[0]}</h5>
                </hgroup>

                <Link to={'/trails'}>Return to Main Page</Link>
            </article>
        } else if (!isLoaded) {
            return loading
        } else {
            const isOwner = this.props.user_id === trail.user_id
            if (isOwner) {
                return <TrailInspect trail={trail}
                                     isOwner={isOwner}
                                     edit={this.props.editTrail}
                                     delete={this.props.deleteTrail}
                                     auth_token={this.props.auth_token}
                />
            } else {
                return <TrailInspect trail={trail} isOwner={false}/>
            }
        }
    }
}

const mapStateToProps = (state) => ({
    errors: state.trailsReducer.errors,
    isLoaded: state.trailsReducer.isLoaded,
    trail: state.trailsReducer.trail,
    isLoggedIn: state.accountReducer.isLoggedIn,
    user_id: state.accountReducer.id,
    auth_token: state.accountReducer.auth_token
})

export default withRouter(connect( mapStateToProps, ({ fetchTrail, deleteTrail, editTrail }))(TrailInspectContainer))