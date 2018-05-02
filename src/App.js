import React, { Component } from 'react';
import logo from './watch.svg';
import './App.css';

import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Neighbourhood Watch</h1>
          <p className="App-intro">
            Avoid danger spots around you...
          </p>
          <Map />
        </header>
        
      </div>
    );
  }
}

export default App;
