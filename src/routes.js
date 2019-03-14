import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Flight from './components/flight/Flight';
import IndividualFlightInfo from './components/individualFlightInfo/IndividualFlightInfo';

export default(
    <Switch>
      <Route exact path='/' component={ Flight }></Route>
      <Route path='/flightInfo' component={ IndividualFlightInfo }></Route>
    </Switch>
)