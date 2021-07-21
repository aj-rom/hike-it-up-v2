import React, {Component} from "react";
import { fetchTrails } from "../actions/trailActions";
import { connect } from "react-redux";
import Trail from "../components/trails/Trail";
import TrailSearch from "../components/trails/TrailSearch";

class TrailSearchContainer extends Component {

    componentDidMount() {
        this.props.fetchTrails()
    }

    renderTrails() {
        return this.props.trails.map(trail => (
            <Trail
                key={trail.id}
                trail={trail}
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
                        <TrailSearch/>
                    </section>
                    <section>
                        {this.renderTrails()}
                    </section>
                </React.Fragment>
            )
        }
    }

}

const mapStateToProps = (state) => ({
    trails: state.trailsReducer.trails,
    isLoaded: state.trailsReducer.isLoaded,
    error: state.trailsReducer.error
})

export default connect( mapStateToProps, ({ fetchTrails }))(TrailSearchContainer)
