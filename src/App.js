import React, { Component } from 'react';
import './App.css';
import DashBoardComponent from './components/DashBoardComponent';


class App extends Component {
  /*We render DashBoardComponent*/
  render() {
    return (
      <div className="App">
      <DashBoardComponent />
      </div>
    );
  }
}

export default App;
