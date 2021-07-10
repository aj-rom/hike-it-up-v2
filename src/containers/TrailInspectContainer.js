import React, { Component } from 'react'
import { fetchTrail, setTrail} from "../actions/trailActions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import TrailInspect from "../components/trail/TrailInspect";

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
            return ( <TrailInspect trail={trail}/>

            )
        }
    }
}

const mapStateToProps = ({ trail, isLoaded, error }) => ({ trail, isLoaded, error })
const dispatch = ({ setTrail, fetchTrail })

export default withRouter(connect( mapStateToProps, dispatch)(TrailInspectContainer))