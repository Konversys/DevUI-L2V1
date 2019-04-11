import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import altairJson from '../jsons/altair.json';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: Array.from(new Set(altairJson.sort(function(a, b){ return a.seasons - b.seasons; }).map((x, index) => {return x.seasons + " сезон" }))),
                datasets: [
                    {
                        label: 'Количество человек',
                        data: [
                            altairJson.filter(function(x) {
                                return x.seasons == Array.from(new Set(altairJson.map((x, index) => {return x.seasons })))[0];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.seasons == Array.from(new Set(altairJson.map((x, index) => {return x.seasons })))[1];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.seasons == Array.from(new Set(altairJson.map((x, index) => {return x.seasons })))[2];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.seasons == Array.from(new Set(altairJson.map((x, index) => {return x.seasons })))[3];
                            }).length,
                            altairJson.filter(function(x) {
                                return x.seasons == Array.from(new Set(altairJson.map((x, index) => {return x.seasons })))[4];
                            }).length
                        ],
                        backgroundColor: [
                            'rgba(54, 99, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 99, 192, 1)'
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
        textTitle: 'Распределение действующего состава МСОП "Альтаир" (Алтайский край) по количеству выкатанных сезонов'
    }

    render(){
        return (
            <div className="chart">
                <Line
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

export default LineChart;