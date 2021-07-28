import React, { Component } from 'react'
import {Route, Switch, Redirect} from "react-router-dom";
import About from "../components/static/About";
import Home from "../components/static/Home";
import TrailSearchContainer from "./TrailSearchContainer";
import TrailInspectContainer from "./TrailInspectContainer";
import TrailCreateContainer from "./TrailCreateContainer";
import LogInContainer from "./LogInContainer";
import SignUpContainer from "./SignUpContainer";
import {connect} from "react-redux";

class RouteContainer extends Component {

    render() {
        const { isLoggedIn } = this.props
        return (
            <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path='/login'>
                    { isLoggedIn ? <Redirect to={'/'}/> : <LogInContainer/>}
                </Route>
                <Route exact path='/signup'>
                    { isLoggedIn ? <Redirect to={'/'}/> : <SignUpContainer/>}
                </Route>
                <Route exact path="/trails">
                    <TrailSearchContainer/>
                </Route>
                <Route exact path="/new_trail">
                    <TrailCreateContainer/>
                </Route>
                <Route exact path="/trails/:id">
                    <TrailInspectContainer/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.accountReducer.isLoggedIn
})

export default connect(mapStateToProps, null)(RouteContainer)

