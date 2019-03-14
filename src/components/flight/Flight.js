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
    .then((response) => {
      // console.log(response.data.flights)
      this.setState({ flightData: response.data.flights })
    })
    .catch((error) => console.log(`Danger Front end code ${ error }`));
  }

  handleSelectFlight(valueInfo) {
    // console.table(valueInfo)
    this.props.history.push(`/flightInfo`, { data: valueInfo })
  }

  render() {
    let { flightData } = this.state;

    let displayflightData = flightData.map((value, index) => {
      // console.log(value, index)
      return(
        <div key={ value.number } className='flightBox' onClick={ () => this.handleSelectFlight(value) }>
          <h3>airline: { value.airline }</h3>
          <p>arrives: { value.arrives.airport }</p>
          <p>when: { monent(value.arrives.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p>departs: { value.departs.airport }</p>
          <p>when: { monent(value.departs.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p>cost: { value.cost }</p>
          <p>number: { value.number }</p>
        </div>
      )
    });

    return (
      <div className="">
        { displayflightData }
      </div>
    );
  }
}

export default Flight;
