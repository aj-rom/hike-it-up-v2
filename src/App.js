import React, { Component } from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import RouteContainer from "./containers/RouteContainer";
import {connect} from "react-redux";

 class App extends Component {

     render() {
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
                             <li>
                                 { this.props.isLoggedIn ? null : <NavLink to="/login">Log In</NavLink>}
                             </li>
                         </ul>
                     </nav>
                     <RouteContainer/>
                 </div>
             </HashRouter>
         )
     }
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.accountReducer.isLoggedIn
})

export default connect(mapStateToProps, null)(App)

