import React, { Component } from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import RouteContainer from "./containers/RouteContainer";
import {connect} from "react-redux";
import {logOut} from "./actions/accountActions";

 class App extends Component {

     handleLogOut = e => {
         e.preventDefault()
         return this.props.logOut
     }

     getSignOutButton = () => {
         return <button onClick={this.handleLogOut} value='Log Out'/>
     }

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
                                 { this.props.isLoggedIn ? this.getSignOutButton : <NavLink to="/login">Log In</NavLink>}
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

export default connect(mapStateToProps, ({ logOut }))(App)

