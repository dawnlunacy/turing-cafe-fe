import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
            this.state = {
                id: 123,
                name: "",
                date: "",
                time: "",
                number: 0
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
                    placeholder="ENTER NAME"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)} 
                    />

            </form>
        )
    }
}

export default Form;