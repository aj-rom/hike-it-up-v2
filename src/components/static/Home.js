// Include option to log in, if logged in show their dashboard
import React, { Component } from 'react'
import ThemeSwitcher from "./ThemeSwitcher";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
            <hgroup>
                <h2>Home</h2>
                <h4>View the Top Rated Trails</h4>
            </hgroup>
            <ThemeSwitcher/>
        </React.Fragment>
        )
    }
}