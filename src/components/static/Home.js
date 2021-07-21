import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";
import AccountContainer from "../../containers/AccountContainer";

export default function Home() {

    return (
        <React.Fragment>
            <hgroup>
                <h2>Home</h2>
                <h4>View your Account</h4>
            </hgroup>
            <AccountContainer/>
            <ThemeSwitcher/>
        </React.Fragment>
    )
}