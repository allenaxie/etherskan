import classes from './TxDetails.module.scss';
import {List, Button, Typography, Avatar} from 'antd';
import moment from 'moment';

const TxDetails = ({tx}:any) => {

    const { Paragraph, Text } = Typography;

    const data = [
        {
            name: 'Transaction Hash:',
            value: tx.result.hash,
        },
        {
            name: 'Block Number:',
            value: tx.result.blockNumber,
        },
        {
            name: 'Block Hash:',
            value: tx.result.blockHash,
        },
        {
            name: 'From:',
            value: tx.result.from,
        },
        {
            name: 'To:',
            value: tx.result.to,
        },
        {
            name: 'Value:',
            value: tx.result.value,
        },
        {
            name: 'Gas Price:',
            value: tx.result.gasPrice,
        },
        {
            name: 'Max Fee Per Gas:',
            value: tx.result.maxFeePerGas,
        },
        {
            name: 'Input:',
            value: tx.result.input,
        },
    ]

    return (
        <List
        bordered
        className={classes.listContainer}
        dataSource={data}
        header={
            <span className={classes.listHeader}>
                Transaction Details
            </span>
        }
        renderItem={(item,idx) => (
            <List.Item key={idx}>
                <div className={classes.itemHeading}>
                    {item.name}
                </div>
                <div className={classes.itemValue}>
                    <Paragraph ellipsis={{rows:1}}>
                        {item.value || 'N/A'}
                    </Paragraph>
                </div>
            </List.Item>
        )}
        />
    )
}

export default TxDetails;