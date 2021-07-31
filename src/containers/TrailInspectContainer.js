import React, { Component } from 'react'
import { fetchTrail } from "../actions/trailActions";
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
            return <TrailInspect trail={trail}/>
        }
    }
}

const mapStateToProps = (state) => ({
    errors: state.trailsReducer.errors,
    isLoaded: state.trailsReducer.isLoaded,
    trail: state.trailsReducer.trail
})
export default withRouter(connect( mapStateToProps, ({ fetchTrail }))(TrailInspectContainer))