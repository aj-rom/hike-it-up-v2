import React, { Component } from 'react'
import Trail from "../components/trails/Trail";

import { connect } from 'react-redux'
import {addTrail, createTrail, deleteTrail, fetchTrails, setTrail} from "../actions/trailActions";
import TrailInput from "../components/trails/TrailInput";

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
                    <hgroup>
                        <h2>All Trails</h2>
                        <h4>View and Search all Trails</h4>
                    </hgroup>
                    <section>
                        <TrailInput createTrail={this.props.createTrail}/>
                    </section>
                    <section>
                        {/*  Implement Search Feature  */}
                    </section>
                    <section className='trails'>
                        {trails.map(trail => (
                            <Trail
                                key={trail.id}
                                trail={trail}
                                user={trail.user_id}
                                onClick={e => setTrail(trail)}
                            />
                        ))}
                    </section>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = ({ trails, isLoaded, error }) => ({ trails, isLoaded, error })
const dispatch = ({ addTrail, deleteTrail, fetchTrails, createTrail, setTrail })

export default connect( mapStateToProps, dispatch)(TrailsContainer)

