import React, { Component } from 'react'

const defaultState = {
    user_id: 1,
    name: '',
    description: '',
    open_at: '',
    close_at: '',
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
            .then(e => this.setState(defaultState))
    }

    render() {
        return (
                <form id='create-trail' onSubmit={ e => this.handleSubmit(e)}>
                    <label>
                        Trail Name
                        <input type='text'
                               name='name'
                               onChange={e => this.handleChange(e)}
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
                               onChange={e => this.handleChange(e)}
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
                                onChange={e => this.handleChange(e)}
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

                    <input type='submit' value='Create Trail'/>
                </form>
        )
    }
}