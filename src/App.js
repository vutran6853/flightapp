import React, { Component } from 'react';
import './App.css';
import route from './routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          { route }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
