import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";
import AccountContainer from "../../containers/AccountContainer";

export default function Home() {

    return (
        <React.Fragment>
            <hgroup>
                <h2>Home</h2>
                <h4>View the Top Rated Trails</h4>
            </hgroup>
            <ThemeSwitcher/>
            <AccountContainer/>
        </React.Fragment>
    )
}