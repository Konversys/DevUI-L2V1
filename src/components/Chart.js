import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositions: 'right',
        textTitle: 'Актив МСОП "Альтаир"'
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={10}
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

export default Chart;