import React, { Component } from "react";

export default class TrailSearch extends Component {

    state = {
        name: '',
        keyword: '',
        open_at: '',
        close_at: '',
        state: '',
        city: '',
        zipcode: ''
    }

    handleChange = e => {
        const { name, value,  } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <details>
                <summary>Search</summary>
                <form id='search-bar'>
                    <div className='grid'>
                        <label>Trail Name
                            <input
                                name='name'
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>Keyword
                            <input
                                name='keyword'
                                type='text'
                                value={this.state.keyword}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className='grid'>
                        <label>Open Time
                            <input
                                name='open_at'
                                type='time'
                                value={this.state.open_at}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>Close Time
                        <input
                            name='close_at'
                            type='time'
                            value={this.state.close_at}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div className='grid'>
                        <label>City
                            <input
                                name='city'
                                type='text'
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>State
                            <input
                                name='state'
                                type='text'
                                value={this.state.state}
                                onChange={this.handleChange}
                                maxLength={2}
                            />
                        </label>
                        <label>Zip-Code
                            <input
                                name='zipcode'
                                type='number'
                                value={this.state.zipcode}
                                onChange={this.handleChange}
                                maxLength={5}
                            />
                        </label>
                    </div>
                    <div className='grid'><br/><input type='submit' value='Search'/><br/></div>
                </form>
            </details>
        )
    }
}