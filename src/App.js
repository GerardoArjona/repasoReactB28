import React, { Component } from 'react';
import logo from './logo.svg';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar  from './components/Navbar';
import Padre from './components/Padre';

class App extends Component {

  state = {
    counters : [
      {id: 1, value: 0},
      {id: 2, value: 3},
      {id: 3, value: 10},
      {id: 4, value: 100}
    ]
  }

  handleDelete = (counterID) => {
    const counters  = this.state.counters.filter(c => c.id !== counterID)
    this.setState({counters})
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //Copia counters
    const index = counters.indexOf(counter);//Busco index del objeto que recibi
    counter[index] = {...counter};//Genero una copia del objeto
    counters[index].value++; //Aumento el valor
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c =>{
      c.value = 0;
      return c
    })
    this.setState({counters})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          contadoresExistentes = {this.state.counters.length}
          contadoresMayores = {this.state.counters.filter(c => c.value > 0 ).length}
        />
        <Padre
          counters = {this.state.counters}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDelete = {this.handleDelete}
        />
      </React.Fragment>
      
    );
  }
}

export default App;
