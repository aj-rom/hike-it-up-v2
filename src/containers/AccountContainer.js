import React, { Component } from 'react'
import { connect } from "react-redux";
import {UserInfo} from "../components/account/UserInfo";

class AccountContainer extends Component {

    render() {
       if (this.props.user_id === null) {
           return <div>Log In or Create an Account!</div>
       } else {
           return <UserInfo user={this.props.user}/>
       }
    }
}

const mapStateToProps = (state) => ({
    user: state.accountReducer.user
})

const dispatch = ({  })

export default connect(mapStateToProps, dispatch)(AccountContainer)