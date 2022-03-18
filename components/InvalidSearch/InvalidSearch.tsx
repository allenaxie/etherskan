import classes from './InvalidSearch.module.scss';
import {Result} from 'antd';

const InvalidSearch = ({query}:any) => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <Result
                status="404"
                title={<span className={classes.resultTitle}>Search Not Found</span>}
                />
            </div>
            <div className={classes.col2}>
                <div className={classes.primaryText}>
                    <span>
                        Oops! The search string you entered was: 
                    </span>
                    <span className={classes.queryString}>
                        {query}
                    </span>
                    <br/>
                    <span>
                        Sorry! This is an invalid search string.
                        <br/>
                        Please try entering a valid <strong className={classes.bold}>block number</strong> or <strong className={classes.bold}>transaction hash</strong>.
                    </span>
                </div>
                <div className={classes.btnContainer}>
                    <button className={classes.btn}>Return Home</button>

                </div>
            </div>
        </div>
    )
}

export default InvalidSearch;