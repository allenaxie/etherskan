import classes from './Statistics.module.scss';
import Chart from '../Chart/Chart';

const Statistics = () => {
    return (
        <div className={classes.container}>
            <div>
                Ether price and market cap
            </div>
            <div>
                Transactions and difficulty
            </div>
            <Chart/>
        </div>
    )
}

export default Statistics;