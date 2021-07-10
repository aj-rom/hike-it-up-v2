import React, {Component} from "react";
import { fetchTrails } from "../actions/trailActions";
import { connect } from "react-redux";
import Trail from "../components/trails/Trail";

class TrailSearchContainer extends Component {

    componentDidMount() {
        this.props.fetchTrails()
    }

    renderTrails() {
        return this.props.trails.map(trail => (
            <Trail
                key={trail.id}
                trail={trail}
                user={trail.user_id}
            />
        ))
    }

    render() {
        const { error, isLoaded } = this.props;
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
                    <section>
                        {this.renderTrails()}
                    </section>
                </React.Fragment>
            )
        }
    }

}

const mapStateToProps = ({ trails, isLoaded, error }) => ({ trails, isLoaded, error })
const dispatch = ({ fetchTrails })

export default connect( mapStateToProps, dispatch)(TrailSearchContainer)
