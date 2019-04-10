import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData: {}
    };
  }



  getChartData(){
    this.setState({
      chartData: {
        // Chart DATA
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Chart/>
      </div>
    );
  }
}

export default App;
