import React from 'react'
import {Route, Switch} from "react-router-dom";
import About from "../components/static/About";
import Home from "../components/static/Home";
import TrailSearchContainer from "./TrailSearchContainer";
import TrailInspectContainer from "./TrailInspectContainer";
import TrailCreateContainer from "./TrailCreateContainer";

export default function RouteContainer() {
    return (
        <Switch>
            <Route exact path="/about">
                <About />
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

