import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import altairJson from './jsons/altair.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
       chartData: {},
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartSortData: {
        labels: altairJson.sort(function(a, b){ return a.employed_rate - b.employed_rate; }).map((x, index) => {return x.place }),
        datasets: [
            {
                label: 'Уровебь безработицы в %',
                data: altairJson.sort(function(a, b){ return a.employed_rate - b.employed_rate; }).map((x, index) => {return x.employed_rate }),
            }
        ]
      },
      chartData: {
        labels: altairJson.sort(function(a, b){ return a.place - b.place; }).map((x, index) => {return x.place }),
        datasets: [
            {
                label: 'Уровебь безработицы в %',
                data: altairJson.sort(function(a, b){ return a.place - b.place; }).map((x, index) => {return x.employed_rate }),
            }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <BarChart chartData={this.state.chartData}/>
        <PieChart chartData={this.state.chartData}/>
        <LineChart chartData={this.state.chartSortData}/>
      </div>
    );
  }
}

export default App;
