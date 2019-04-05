import React, { Component } from 'react';
import logo from './logo.svg';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar  from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          contadoresExistentes = "10"
          contadoresMayores = "100"
        />
      </div>
      
    );
  }
}

export default App;
