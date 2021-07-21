import React, { Component } from 'react'
import { fetchTrail } from "../actions/trailActions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import TrailInspect from "../components/trails/TrailInspect";

class TrailInspectContainer extends Component {


    componentDidMount() {
        let { id } = this.props.match.params
        this.props.fetchTrail(id)
    }

    render() {
        const { error, isLoaded, trail } = this.props;
        if (error) {
            return <div className='error'>{error.message}...</div>;
        } else if (!isLoaded) {
            return <div className='on-load'>Loading...</div>;
        } else {
            return <TrailInspect trail={trail}/>
        }
    }
}

const mapStateToProps = (state) => ({
    error: state.trailsReducer.error,
    isLoaded: state.trailsReducer.isLoaded,
    trail: state.trailsReducer.trail
})
export default withRouter(connect( mapStateToProps, ({ fetchTrail }))(TrailInspectContainer))