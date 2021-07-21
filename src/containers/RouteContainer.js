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
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path='/login'>
                <LogInContainer/>
            </Route>
            <Route exact path='/signup'>
                <SignUpContainer/>
            </Route>
            <Route exact path="/trails">
                <TrailSearchContainer />
            </Route>
            <Route exact path="/new_trail">
                <TrailCreateContainer/>
            </Route>
            <Route exact path="/trails/:id">
                <TrailInspectContainer/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

