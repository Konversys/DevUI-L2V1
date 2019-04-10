import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import altairJson from './jsons/altair.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
       chartData: {}
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData: {
        labels: altairJson.map((x, index) => {return x.name }),
        datasets: [
            {
                label: '',
                data: altairJson.map((x, index) => {return x.age })
            }
        ]
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
