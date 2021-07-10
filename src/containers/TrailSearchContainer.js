import React, {Component} from "react";
import {fetchTrails, setTrail} from "../actions/trailActions";
import {connect} from "react-redux";
import Trail from "../components/trails/Trail";

class TrailSearchContainer extends Component {

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
            )
        }
    }

}

const mapStateToProps = ({ trails, isLoaded, error }) => ({ trails, isLoaded, error })
const dispatch = ({ fetchTrails, setTrail })

export default connect( mapStateToProps, dispatch)(TrailSearchContainer)
