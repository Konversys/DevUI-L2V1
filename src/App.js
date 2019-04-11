import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart/>
        <PieChart/>
        <LineChart/>
      </div>
    );
  }
}

export default App;