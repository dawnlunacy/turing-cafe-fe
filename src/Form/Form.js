import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super()
            this.state = {
                id: 123,
                name: "",
                date: "",
                time: "",
                number: ""
            }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitNewReservation = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.clearInputs()

    }

    clearInputs = () => {
        this.setState({ 
            id: 123,
            name: "",
            date: "",
            time: "",
            number: ""
        })
    }
    render() {
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
                <button className="form-btn" onClick = {event => this.submitNewReservation(event)}> Make Reservation </button>
            </form>
        )
    }
}

export default Form;