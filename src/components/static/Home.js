// Include option to log in, if logged in show their dashboard
import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";

export default function Home() {

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