import React from 'react'
import {Route, Switch} from "react-router-dom";
import About from "../components/static/About";
import Home from "../components/static/Home";
import TrailSearchContainer from "./TrailSearchContainer";
import TrailInspectContainer from "./TrailInspectContainer";
import TrailCreateContainer from "./TrailCreateContainer";
import LogInContainer from "./LogInContainer";
import SignUpContainer from "./SignUpContainer";

export default function RouteContainer() {
    return (
        <Switch>
            <Route path="/hike-it-up-v2/about">
                <About />
            </Route>
            <Route path='hike-it-up-v2/login'>
                <LogInContainer/>
            </Route>
            <Route path='/hike-it-up-v2/signup'>
                <SignUpContainer/>
            </Route>
            <Route path="/hike-it-up-v2/trails">
                <TrailSearchContainer />
            </Route>
            <Route path="/hike-it-up-v2/new_trail">
                <TrailCreateContainer/>
            </Route>
            <Route path="/hike-it-up-v2/trails/:id">
                <TrailInspectContainer/>
            </Route>
            <Route path="/hike-it-up-v2/">
                <Home />
            </Route>
        </Switch>
    )
}

