import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
            this.state = {
                id: 123,
                name: "",
                date: "",
                time: "",
                number: null
            }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log("FormState", this.state)
        return(
            <form className="input-form">
                <input
                    name="name"
                    placeholder="NAME"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)} 
                    />
                <input
                    name="date"
                    placeholder="Date (mm/dd)"
                    value={this.state.date}
                    onChange={event => this.handleChange(event)} 
                    />
                <input
                    name="time"
                    placeholder="TIME"
                    value={this.state.time}
                    onChange={event => this.handleChange(event)} 
                    />
                <input
                    name="number"
                    type="number"
                    placeholder="Number of guests"
                    value={this.state.number}
                    onChange={event => this.handleChange(event)} 
                    />
            </form>
        )
    }
}

export default Form;