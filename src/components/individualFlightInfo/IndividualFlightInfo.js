import React, { Component } from 'react';

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

  componentDidMount() {
    // console.log(this.props)
    // this.setState({ selectFlightData: this.props.location.state.data });
  }

  handleUserInput = (e) => {
    this.setState({ [ e.target.name]:  e.target.value })
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <p>individualFlightInfo</p>

        <div key={ this.props.location.state.data.number } className='flightBox'> 
          <h3>airline: { this.props.location.state.data.airline }</h3> 
          <p>arrives: { this.props.location.state.data.arrives.airport }</p> 
          <p>when: { monent(this.props.location.state.data.arrives.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p>departs: { this.props.location.state.data.departs.airport }</p>
          <p>when: { monent(this.props.location.state.data.departs.when).format('MMMM Do YYYY h:mm:ss a') }</p>
          <p>cost: { this.props.location.state.data.cost }</p>
          <p>number: { this.props.location.state.data.number }</p>
        </div>

        <input name='firstName' onChange={ this.handleUserInput } placeholder='Enter First Name'></input>
        <input name='lastName' onChange={ this.handleUserInput } placeholder='Enter LAst Name'></input>
        <input type='number' name='qytBag' onChange={ this.handleUserInput } placeholder='qty of bags'></input>
      </div>
    );
  }
}

export default IndividualFlightInfo;