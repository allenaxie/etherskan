import classes from './AvgLatencyChart.module.scss';
import { Line } from 'react-chartjs-2';
import {useState} from 'react';
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

    const LatencyData:any = [
        {
            date: '03/15',
            value: 13.10,
          },
          {
            date: '03/16',
            value: 13.25,
          },
          {
            date: '03/17',
            value: 13.27,
          },
          {
            date: '03/18',
            value: 13.24,
          },
          {
            date: '03/19',
            value: 13.19,
          },
          {
            date: '03/20',
            value: 13.17,
          },
          {
            date: '03/21',
            value: 13.19,
          },
    ]

    const [latencyData, setLatencyData] = useState({
        labels: LatencyData.map((data) => data.date),
        datasets:[{
          label: "Ethereum Average Latency (seconds)",
          data: LatencyData.map((data) => data.value),
          backgroundColor: ['rgb(250, 193, 71)'],
          borderColor: "black",
          borderWidth:1,
        }]
      })

    return (
        <div className={classes.container}>
            <div style={{ width: 300 }}>
                <Line
                    data={latencyData}
                />
            </div>
        </div>
    )
}

export default AvgLatencyChart;