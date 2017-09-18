import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  appName = 'React Todo App'

  constructor(params) {
    super(params)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.appName}</h2>
        </div>
        <Todo />
      </div>
    );
  }
}

export default App;
