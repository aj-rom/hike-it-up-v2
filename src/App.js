import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";
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
                            <Link to="/trails">Trails</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <RouteContainer/>
            </div>
        </BrowserRouter>
    );
}

