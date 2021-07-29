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

    redirectToIfNotLogged(isLoggedIn, pathToRedirect, component) {
        return isLoggedIn ? component : <Redirect to={pathToRedirect}/>
    }

    redirectToIfLogged(isLoggedIn, pathToRedirect, component) {
        return isLoggedIn ? <Redirect to={pathToRedirect}/> : component
    }

    redirectHomeIfLogged(isLoggedIn, component) {
        return this.redirectToIfLogged(isLoggedIn, '/', component)
    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path='/login'>
                    { this.redirectHomeIfLogged(isLoggedIn, <LogInContainer/>)}
                </Route>
                <Route exact path='/signup'>
                    { this.redirectHomeIfLogged(isLoggedIn, <SignUpContainer/>)}
                </Route>
                <Route exact path="/trails">
                    <TrailSearchContainer/>
                </Route>
                <Route exact path="/trails/new">
                    { this.redirectToIfNotLogged(isLoggedIn, '/login', <TrailCreateContainer/>)}
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

