import React, { Component } from 'react';
import axios from 'axios';

const monent = require('moment');

class IndividualFlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectFlightData: [],
      firstName: '',
      lastName: '',
      qytBag: 0,
     };
  }

  handleUserInput = (e) => {
    this.setState({ [ e.target.name]:  e.target.value })
  }

  handleSubmitUserInfo() {
    if(this.state.firstName != '' && this.state.lastName != '') {

      axios.post('http://localhost:5000/book', {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        flight_number: this.props.location.state.data.number,
        bags: this.state.qytBag
      })
      .then((response) => {
        if(response.data.message) {
          alert(`Your message:  ${ response.data.message }`)
        } else if(response.data.confirmation) {
          alert(`Success your confirmation number is:  ${ response.data.confirmation }`)
        }
      })
      .catch((error) => console.log(`Danger Front end code ${ error }`));

      this.setState({ firstName: '', lastName: '' })
    } else {
      alert('Please enter first or last!')
    }
  }

  render() {

    return (
      <div>
        <h3>FlightInfo</h3>

        <div key={ this.props.location.state.data.number } className='flightBox'> 
          <p><strong>Airline:</strong> { this.props.location.state.data.airline }</p> 
          <p><strong>Arrives:</strong> { this.props.location.state.data.arrives.airport }</p> 
          <p><strong>When:</strong> { monent(this.props.location.state.data.arrives.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p><strong>Departs:</strong> { this.props.location.state.data.departs.airport }</p>
          <p><strong>When:</strong> { monent(this.props.location.state.data.departs.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p><strong>Cost:</strong>  ${ this.props.location.state.data.cost }</p>
          <p><strong>Flight Number:</strong> { this.props.location.state.data.number }</p>
        </div>

        <div className='passagerInfoBox'>
          <h3>Passager Infomation:</h3>
          <p>Enter First Name: </p>
          <input value={ this.state.firstName } name='firstName' onChange={ this.handleUserInput } placeholder='Enter First Name'></input>
          <p>Enter Last Name: </p>
          <input value={ this.state.lastName } name='lastName' onChange={ this.handleUserInput } placeholder='Enter LAst Name'></input>
          <p>QTY of Bags: </p>
          <input type='number' name='qytBag' onChange={ this.handleUserInput } placeholder='qty of bags'></input>
          <button onClick={ () => this.handleSubmitUserInfo() }>Submit</button>
        </div>
      </div>
    );
  }
}

export default IndividualFlightInfo;