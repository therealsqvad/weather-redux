import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import City from '../inputdiv'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <City />
        </header>
      </div>
    );
  }
}

export default App;
