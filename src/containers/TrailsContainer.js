import React, { Component } from 'react'
import Trail from "../components/Trail";

import { connect } from 'react-redux'
import {addTrail, createTrail, deleteTrail, fetchTrails} from "../actions/trailActions";
import TrailInput from "../components/TrailInput";

class TrailsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrails()
    }

    render() {
        const { error, isLoaded, trails } = this.props;
        if (error) {
            return <div className='error'>{error.message}...</div>;
        } else if (!isLoaded) {
            return <div className='on-load'>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    <br/>
                    <TrailInput createTrail={this.props.createTrail}/>
                    <div className='trails'>
                        {trails.map(e => (
                            <Trail
                                key={e.id}
                                trail={e}
                                user={e.user_id}
                            />
                        ))}
                    </div>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = ({ trails, isLoaded, error }) => ({ trails, isLoaded, error })

export default connect( mapStateToProps, ({ addTrail, deleteTrail, fetchTrails, createTrail }))(TrailsContainer)

