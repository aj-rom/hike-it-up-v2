import React, { Component } from 'react'

const defaultState = {
    user_id: 1,
    name: '',
    description: '',
    hour_open: '',
    hour_close: '',
    images: []
}

export default class TrailInput extends Component {

    constructor(props) {
        super(props)
        this.state = defaultState
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createTrail(this.state)
            .then(e => this.setState( defaultState))
    }

    render() {
        return (
            <details>
                <summary>Add A Trail</summary>
                <form id='create-trail' onSubmit={ e => this.handleSubmit(e)}>
                    <h2>Create Trail</h2>
                    <label>
                        Trail Name
                        <input type='text'
                               name='name'
                               onChange={e => this.handleChange(e)}
                               value={this.state.name}
                               required={true}
                        />
                    </label>

                    <label>
                        Description
                        <input type='textarea'
                               name='description'
                               onChange={e => this.handleChange(e)}
                               value={this.state.description}
                               required={true}
                        />
                    </label>

                    <label>
                        Open Time
                        <input
                            name='hour_open'
                            type='number'
                            max={12}
                            min={1}
                            onChange={e => this.handleChange(e)}
                            value={this.state.hour_open}
                            required={true}
                        />
                    </label>

                    <label>
                        Close Time
                        <input
                            name='hour_close'
                            type='number'
                            max={12}
                            min={1}
                            onChange={e => this.handleChange(e)}
                            value={this.state.hour_close}
                            required={true}
                        />
                    </label>

                    <label>
                        Images
                        <input type='file'
                               name='images'
                               onChange={e => this.handleChange(e)}
                               value={this.state.images}
                        />
                    </label>

                    <input type='submit' value='Create Trail'/>

                </form>
            </details>
        )
    }
}