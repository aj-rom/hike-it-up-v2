import React, { Component } from 'react'
import { BACKEND_URL } from "../shared/constants";
import Trail from "../components/Trail";

export default class TrailsContainer extends Component {

    state = {
        trails: [],
        error: null,
        isLoaded: false
    }

    componentDidMount() {
        fetch(BACKEND_URL + 'trails')
            .then(resp => resp.json())
            .then(e => this.setState({ trails: e.trails, isLoaded: true }))
            .catch(e => this.setState({ isLoaded: false, error: e }))
    }

    render() {
        const { error, isLoaded, trails } = this.state;
        if (error) {
            return <div className='error'>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className='on-load'>Loading...</div>;
        } else {
            return (
                <div className='trails'>
                    {trails.map(e => (<Trail key={e.id} trail={e}/>))}
                </div>
            );
        }
    }
}