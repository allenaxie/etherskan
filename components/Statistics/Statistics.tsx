import classes from './Statistics.module.scss';
import Chart from '../Chart/Chart';
import { Card } from 'antd';
import millify from "millify";

const Statistics = ({ ethPrice }: any) => {
    return (
        <Card className={classes.container}>
            <div className={classes.cardContent}>
                <div className={classes.col1}>
                    <div className={classes.ethPriceContainer}>
                        <div className={classes.ethIconContainer}>
                            <svg className={classes.iconEth}><use xlinkHref="#icon-ethereum"></use></svg>
                        </div>
                        <div className={classes.ethStatsContainer}>
                            <div className={classes.ethPriceStat}>
                                <span className={classes.ethPriceTitle}>ETHER PRICE</span>
                                <span className={classes.ethPrice}>
                                    ${parseFloat(ethPrice.data.coin.price).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ethMCContainer}>
                        <div className={classes.ethMCIconContainer}>
                            <svg className={classes.ethMCIcon}><use xlinkHref="#icon-sphere"></use></svg>
                        </div>
                        <div className={classes.ethMCStatsContainer}>
                            <div className={classes.ethMCStat}>
                                <span className={classes.ethMCTitle}>MARKET CAP</span>
                                <span>
                                    ${millify(ethPrice.data.coin.marketCap)} USD
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.col2}>
                    Column 2
                </div>
                <div className={classes.col3}>
                    <Chart />
                </div>
            </div>
        </Card>
    )
}

export default Statistics;