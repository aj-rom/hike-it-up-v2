import React, { Component } from 'react'

const defaultState = {
    errors: [],
    name: '',
    description: '',
    open_at: '',
    close_at: '',
    address: {
        street: '',
        city: '',
        state: '',
        zipcode: undefined
    }
}

export default class TrailInput extends Component {

    constructor(props) {
        super(props)
        this.state = defaultState
    }

    handleChange = e => {
        const { name, value } = e.target
        if (Object.keys(defaultState).includes(name)) {
            this.setState({ ...this.state, [name]: value })
        } else {
            this.setState({ ...this.state, address: { ...this.state.address, [name]: value }})
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createTrail(this.state)
            .then(e => console.log(e))
            .then(e => this.setState(defaultState))
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
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
                                   max={100}
                                   min={3}
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                                name='description'
                                onChange={this.handleChange}
                                value={this.state.description}
                                required={true}
                                maxLength={300}
                                minLength={15}
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
                                value={this.state.address.street}
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
                                    value={this.state.address.city}
                                    required={true}
                                />
                            </label>

                            <label>
                                State
                                <input
                                    name='state'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.address.state}
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
                                value={this.state.address.zipcode}
                                required={true}
                                minLength={5}
                                maxLength={5}
                            />
                        </label>
                    </article>


                    <div className='grid'>
                        <br/>
                        <input type='submit' value='Create Trail'/>
                        <br/>
                    </div>
                </form>
        )
    }
}