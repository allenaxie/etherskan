import classes from './NetworkThroughputChart.module.scss';
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

const NetworkThroughputChart = () => {

    const NetworkData:any = [
        {
            date: '03/15',
            value: 12.73,
          },
          {
            date: '03/16',
            value: 13.77,
          },
          {
            date: '03/17',
            value: 14.30,
          },
          {
            date: '03/18',
            value: 13.60,
          },
          {
            date: '03/19',
            value: 14.65,
          },
          {
            date: '03/20',
            value: 13.05,
          },
          {
            date: '03/21',
            value: 12.95,
          },
    ]

    const [networkData, setNetworkData]:any = useState({
        labels: NetworkData.map((data:any) => data.date),
        datasets: [{
            label: "Network Throughput (tx/s)",
            data: NetworkData.map((data:any) => data.value),
            backgroundColor:['#fff'],
            borderColor:"black",
            borderWidth:1,
        }] 
    })

    return (
        <div className={classes.container}>
            <div style={{ width: 300 }}>
                <Line
                    data={networkData}
                />
            </div>
        </div>
    )
}

export default NetworkThroughputChart;
