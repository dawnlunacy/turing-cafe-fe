import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
            this.state = {
                name: "",
                date: "",
                time: "",
                number: 0
            }
    }

    render() {
        return(
            <p> Testing Our Communication</p>
        )
    }
}

export default Form;