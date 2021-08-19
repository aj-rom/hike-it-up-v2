import React, { Component } from "react";
import {connect} from "react-redux";
import {ErrorField} from "../ErrorField";

class AuthForm extends Component {

    constructor(props) {
        super(props);
        const initialState = { email: '', password: '' }
        if (props.includeConfirmation) {
            this.state =  { ...initialState, password_confirmation: '' }
        } else {
            this.state = initialState
        }

    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.props.includeConfirmation) {
            if (this.state.password === this.state.password_confirmation) {
                this.props.onSubmit(this.state)
                this.setState({email: '', password: '', password_confirmation: ''})
            } else alert('Passwords do not match!')
        } else {
            this.props.onSubmit(this.state)
            this.setState({ email: '', password: '' })
        }
    }

    includesConfirmation() {
        if (this.props.includeConfirmation) {
            return (
                <fieldset>
                    <label>
                        Password Conformation
                        <input
                            type='password'
                            name='password_confirmation'
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required={true}
                            minLength={6}
                        />
                    </label>
                </fieldset>
            )
        }
    }

    render() {
        return (
            <article>
                <form onSubmit={this.handleSubmit}>
                    { this.props.errors ? <ErrorField key={this.props.errors.length} errors={this.props.errors}/> : null }
                    <fieldset>
                        <label>
                            Email Address
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required={true}
                            />

                        </label>
                    </fieldset>
                    <div className='grid'>
                        <fieldset>
                            <label>
                                Password
                                <input
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required={true}
                                    minLength={6}
                                />
                            </label>
                        </fieldset>
                        {this.includesConfirmation()}
                    </div>
                    <input type='submit' value='Login'/>
                </form>
            </article>
        )
    }
}
const mapStateToProps = (state) => ({
    errors: state.accountReducer.errors
})

export default connect(mapStateToProps)(AuthForm)