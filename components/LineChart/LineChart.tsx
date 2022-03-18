import classes from './LineChart.module.scss';
import { Row, Col, Typography } from 'antd';
import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
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


const LineChart = ({ethTxData}:any) => {

  

  return (
    <div className={classes.container}>
      <div style={{width: 300}}>
        <Line
          data={ethTxData}

        />
      </div>
    </div>
  )
}

export default LineChart;