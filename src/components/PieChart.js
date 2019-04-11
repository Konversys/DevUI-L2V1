import React, {Component} from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import altairJson from '../jsons/altair.json';

class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: Array.from(new Set(altairJson.map((x, index) => {return x.sex }))),
                datasets: [
                    {
                        data: [
                            altairJson.filter(function(x) {
                                return x.sex == "Мужской";
                            }).length,
                            altairJson.filter(function(x) {
                                return x.sex == "Женский";
                            }).length
                        ],
                        backgroundColor: [
                            'rgba(54, 64, 255, 1)',
                            'rgba(255, 54, 64, 1)'
                        ]
                    }
                ]
              }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositions: 'right',
        textTitle: 'Распределение действующего состава МСОП "Альтаир" (Алтайский край) по полу'
    }

    render(){
        return (
            <div className="chart">
                <Pie
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
                        }
                    }}
                />
            </div>
        )
    }
}

export default PieChart;