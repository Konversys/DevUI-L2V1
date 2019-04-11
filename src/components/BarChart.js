import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import altairJson from '../jsons/altair.json';

class BarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: Array.from(new Set(altairJson.map((x, index) => {return x.univer }))),
                datasets: [
                    {
                        label: 'Количество человек',
                        data: [
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[0];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[1];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[2];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[3];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[4];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[5];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.univer == Array.from(new Set(altairJson.map((x, index) => {return x.univer })))[6];
                            }).length
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 99, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 99, 192, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
              }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositions: 'right',
        textTitle: 'Распределение действующего состава МСОП "Альтаир" (Алтайский край) по учебным заведениям'
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={20}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.textTitle,
                            fontSize: 16
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPositions
                        },
                        scales: {
                            yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default BarChart;