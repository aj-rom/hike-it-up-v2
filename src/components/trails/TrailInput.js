import React, { Component } from 'react'
import {ErrorField} from "../ErrorField";
import {connect} from "react-redux";

const defaultState = {
    name: '',
    description: '',
    open_at: '',
    close_at: '',
    address_attributes: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
    }
}

class TrailInput extends Component {
    constructor(props) {
        super(props);
        if (props.trail) {
            this.state = props.trail
        }
        else {
            this.state = defaultState
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        if (Object.keys(defaultState).includes(name)) {
            this.setState({ ...this.state, [name]: value })
        } else {
            this.setState({ ...this.state, address_attributes: { ...this.state.address_attributes, [name]: value }})
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createTrail(this.state, this.props.auth_token)
        if (this.props.errors.length === 0) {
            alert('Success')
            this.setState(defaultState)
        }
            // .then(e => {
            //     if (this.props.errors.length === 0) {
            //         this.setState(defaultState)
            //         alert('Trail created.')
            //         // TODO : Redirect to the newly created trail page
            //     }
            // })
    }

    errorField() {
        if (this.props.errors.length !== 0) {
            return <ErrorField errors={this.props.errors}/>
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.errorField()}
                <article>
                    <hgroup>
                        <h3>Basic Information</h3>
                        <h4>Information regarding the trails name, the hours of operation, and anything else you want to add.</h4>
                    </hgroup>
                    <label>
                        Trail Name
                        <input type='text'
                               name='name'
                               onChange={this.handleChange}
                               value={this.state.name}
                               required={true}
                               minLength={3}
                               maxLength={100}
                        />
                    </label>

                    <label>
                        Description
                        <textarea
                            name='description'
                            onChange={this.handleChange}
                            value={this.state.description}
                            required={true}
                            maxLength='300'
                            minLength='15'
                        />
                    </label>

                    <div className='grid'>
                        <label>
                            Open Time
                            <input
                                name='open_at'
                                type='time'
                                onChange={this.handleChange}
                                value={this.state.open_at}
                                required={true}
                            />
                        </label>

                        <label>
                            Close Time
                            <input
                                name='close_at'
                                type='time'
                                onChange={e => this.handleChange(e)}
                                value={this.state.close_at}
                                required={true}
                            />
                        </label>
                    </div>
                </article>

                <article>
                    <hgroup>
                        <h3>Address</h3>
                        <h4>Information on where to find this trail.</h4>
                    </hgroup>

                    <label>
                        Street
                        <input
                            name='street'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.address_attributes.street}
                            required={true}
                        />
                    </label>
                    <div className='grid'>
                        <label>
                            City
                            <input
                                name='city'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.address_attributes.city}
                                required={true}
                                minLength={2}
                            />
                        </label>

                        <label>
                            State
                            <input
                                name='state'
                                type='text'
                                onChange={this.handleChange}
                                value={this.state.address_attributes.state}
                                required={true}
                                minLength={2}
                                maxLength={2}
                            />
                        </label>
                    </div>
                    <label>
                        Zip Code
                        <input
                            name='zipcode'
                            type='number'
                            onChange={this.handleChange}
                            value={this.state.address_attributes.zipcode}
                            required={true}
                            min={10000}
                            max={99999}
                        />
                    </label>
                </article>


                <div className='grid'>
                    <br/>
                    <input type='submit' value={this.props.submitValue}/>
                    <br/>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.trailsReducer.errors,
    trails: state.trailsReducer.trails
})

export default connect(mapStateToProps, null)(TrailInput)