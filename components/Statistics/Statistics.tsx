import classes from './Statistics.module.scss';
import LineChart from '../LineChart/LineChart';
import { Card } from 'antd';
import millify from "millify";
import Image from 'next/image';

const Statistics = ({ ethPrice, ethTxData }: any) => {
    return (
        <Card className={classes.container}>
            <div className={classes.cardContent}>
                <div className={classes.col1}>
                    <div className={classes.ethPriceContainer}>
                        <div className={classes.ethIconContainer}>
                            <Image src="/eth-icon.png" width={45} height={50} className={classes.iconEth}/>
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
                            <Image src="/globe-icon.png" width={35} height={35} className={classes.ethMCIcon}/>
                        </div>
                        <div className={classes.ethMCStatsContainer}>
                            <div className={classes.ethMCStat}>
                                <span className={classes.ethMCTitle}>MARKET CAP</span>
                                <span className={classes.ethMC}>
                                    ${millify(ethPrice.data.coin.marketCap)} USD
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={classes.col2}>
                    <div className={classes.transMedGasContainer}>
                        <div className={classes.transactionsContainer}></div>
                        <div className={classes.medGasContainer}></div>
                    </div>
                    <div className={classes.diffHashContainer}>
                        <div className={classes.difficultyContainer}></div>
                        <div className={classes.hashrateContainer}></div>
                    </div>
                </div> */}
                <div className={classes.col3}>
                    <LineChart ethTxData={ethTxData}/>
                </div>
            </div>
        </Card>
    )
}

export default Statistics;