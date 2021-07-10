import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/static/About";
import Home from "./components/static/Home";
import TrailInspectContainer from "./containers/TrailInspectContainer";
import TrailSearchContainer from "./containers/TrailSearchContainer";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/trails">Trails</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/trails">
                        <TrailSearchContainer />
                    </Route>
                    <Route exact path="/trails/:id">
                        <TrailInspectContainer/>
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

