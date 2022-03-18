import classes from './BlockDetails.module.scss';
import {List, Button, Typography, Avatar} from 'antd';
import moment from 'moment';


const BlockDetails = ({block}:any) => {
    const { Paragraph, Text } = Typography;
    let time = moment(block.timestamp*1000).startOf('minutes').fromNow();

    const data = [
        { name: 'Timestamp:',
          value: time,
        },
        {
            name: 'Number of transactions:',
            value: block.transactions.length,
        },
        {
            name: 'Base Fee Per Gas:',
            value: block.baseFeePerGas,
        },
        {
            name: 'Mined by:',
            value: block.miner,
        },
        {
            name: 'Difficulty:',
            value: block.difficulty,
        },
        {
            name: 'Size:',
            value: block.size,
        },
        {
            name: 'Hash:',
            value: block.hash,
        },
        {
            name: 'Gas Limit:',
            value: block.gasLimit,
        },
        {
            name: 'Gas Used:',
            value: block.gasUsed,
        },
    ]

    return (
        <List
        bordered
        className={classes.listContainer}
        dataSource={data}
        header={<span className={classes.listHeader}>Block: #{block.number}</span>}
        renderItem={(item, idx) => (
            <List.Item key={idx}>
                <div className={classes.itemHeading}>
                    {item.name}
                </div>
                <div className={classes.itemValue}>
                    {item.value || 'N/A'}
                </div>
            </List.Item>
            )}
        />
    )
}

export default BlockDetails;