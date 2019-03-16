import React, { Component } from 'react';
import axios from 'axios';
import './flight.css';

const monent = require('moment');

class Flight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightData: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/flights')
    .then((response) => this.setState({ flightData: response.data.flights }))
    .catch((error) => console.log(`Danger Front end code ${ error }`));
  }

  handleSelectFlight(valueInfo) {
    this.props.history.push(`/flightInfo`, { data: valueInfo })
  }

  render() {
    let { flightData } = this.state;

    let displayflightData = flightData.map((value, index) => {
      return(
        <div key={ value.number } className='flightBox' onClick={ () => this.handleSelectFlight(value) }>
          <p><strong>Airline:</strong> { value.airline }</p>
          <p><strong>Arrives:</strong> { value.arrives.airport }</p>
          <p><strong>When:</strong> { monent(value.arrives.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p><strong>Departs:</strong> { value.departs.airport }</p>
          <p><strong>When:</strong> { monent(value.departs.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p><strong>Cost:</strong> ${ value.cost }</p>
          <p><strong>Flight Number:</strong> { value.number }</p>
        </div>
      )
    });

    return (
      <div>
        <h3>Please select flight</h3>
          { displayflightData }
      </div>
    );
  }
}

export default Flight;
