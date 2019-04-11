import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class BarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData,
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositions: 'right',
        textTitle: 'Уровень безработицы на регистрируемом рынке труда в разрезе городов и районов РБ в 2015 году'
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
                        }
                    }}
                />
            </div>
        )
    }
}

export default BarChart;