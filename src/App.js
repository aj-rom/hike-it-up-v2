import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/static/About";
import Home from "./components/static/Home";
import TrailInspectContainer from "./containers/TrailInspectContainer";
import TrailSearchContainer from "./containers/TrailSearchContainer";
import RouteContainer from "./containers/RouteContainer";

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
                <RouteContainer/>
            </div>
        </BrowserRouter>
    );
}

