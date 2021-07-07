import React, { Component } from 'react'
import Trail from "../components/Trail";

import { connect } from 'react-redux'
import {addTrail, deleteTrail, fetchTrails} from "../actions/trailActions";

class TrailsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        const { error, isLoaded, trails } = this.props;
        if (error) {
            return <div className='error'>{error.message}... Please wait while the server boots up.</div>;
        } else if (!isLoaded) {
            return <div className='on-load'>Loading...</div>;
        } else {
            return (
                <div className='trails'>
                    {trails.map(e => (<Trail key={e.id} trail={e.attributes} user={e.relationships.user}/>))}
                </div>
            );
        }
    }
}

const mapStateToProps = ({ trails, isLoaded, error }) => ({ trails, isLoaded, error })

export default connect( mapStateToProps, ({ addTrail, deleteTrail, fetchTrails }))(TrailsContainer)

