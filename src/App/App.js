import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer'

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

  render() {
    console.log("STATE", this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
    
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
