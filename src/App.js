import React from 'react'
import { BrowserRouter, NavLink } from "react-router-dom";
import RouteContainer from "./containers/RouteContainer";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/hike-it-up-v2">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hike-it-up-v2/trails">Trails</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hike-it-up-v2/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <RouteContainer/>
            </div>
        </BrowserRouter>
    );
}

