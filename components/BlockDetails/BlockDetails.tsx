import classes from './BlockDetails.module.scss';
import {List, Button, Typography, Avatar} from 'antd';
import moment from 'moment';


const BlockDetails = ({block}:any) => {
    const { Paragraph, Text } = Typography;
    console.log('block details', block)
    let time = moment(block.timestamp*1000).startOf('minutes').fromNow();

    const dummyData = [
        block.number,
        time,
        `${block.transactions.length}`,
        block.baseFeePerGas,
        block.difficulty,
        block.gasLimit,
        block.gasUsed,
        block.hash,
        block.miner,
        block.size,
        

    ]

    return (
        <List
        bordered
        className={classes.listContainer}
        dataSource={dummyData}
        header={<span className={classes.listHeader}>Block Details: #{block.number}</span>}
        renderItem={item => (
            <List.Item key={item.id}>
               {item}
                
            </List.Item>
            )}
        />
       
    )
}

export default BlockDetails;