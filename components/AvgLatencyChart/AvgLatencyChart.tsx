import classes from './AvgLatencyChart.module.scss';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
)

const AvgLatencyChart = () => {

    const latencyData:any = [
        {
            date: '03/15',
            value: 1.098,
          },
          {
            date: '03/16',
            value: 1.190,
          },
          {
            date: '03/17',
            value: 1.236,
          },
          {
            date: '03/18',
            value: 1.175,
          },
          {
            date: '03/19',
            value: 1.266,
          },
          {
            date: '03/20',
            value: 1.128,
          },
          {
            date: '03/21',
            value: 1.119,
          },
    ]
    return (
        <div className={classes.container}>
            <div style={{ width: 300 }}>
                {/* <Line
                    data={latencyData}
                /> */}
            </div>
        </div>
    )
}

export default AvgLatencyChart;