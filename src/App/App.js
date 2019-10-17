import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(resp => resp.json())
    .then(reservations => this.setState({reservations}))
  }

  handleSubmit = (newReservation) => {
    console.log("FormInfo", newReservation)
    this.setState({reservations: [...this.state.reservations, newReservation]})
    this.render()
  }

  render() {
    console.log("AppState", this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form handleSubmit = {this.handleSubmit}/>
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
