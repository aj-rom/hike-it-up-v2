import React from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import RouteContainer from "./containers/RouteContainer";

export default function App() {
    return (
        <HashRouter baseName='hike-it-up-v2'>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trails">Trails</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <RouteContainer/>
            </div>
        </HashRouter>
    );
}

