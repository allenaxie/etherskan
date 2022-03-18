import classes from './Blocks.module.scss';
import {List, Button, Typography, Avatar} from 'antd';
import moment from 'moment';


const Blocks = ({blocks}:any) => {

    const {Paragraph} = Typography;

    return (
        <List
        bordered
        className={classes.listContainer}
        dataSource={blocks}
        header={<span className={classes.listHeader}>Latest Blocks</span>}
        footer={
        <div className={classes.footer}>
            <Button className={classes.button}>View all blocks</Button>
        </div>
        }
        renderItem={(b:any,index) => (
            <List.Item key={index} className={classes.listItemContainer}>
                <div className={classes.col1}>
                    <div className={classes.avatarContainer}>
                        <Avatar size={40} shape="square">
                            Bk
                        </Avatar>
                    </div>
                    <List.Item.Meta
                    title={
                        <a>
                            {b.number}
                        </a>
                    }
                    description={moment(b.timestamp*1000).startOf('minutes').fromNow()}
                    />
                </div>
                <div className={classes.col2}>
                    <div className={classes.minerContainer}>
                        <Paragraph ellipsis={{rows:1}}>
                            Miner: 
                            <a className={classes.miner}>
                                {b.miner}
                            </a>
                        </Paragraph>
                    </div>
                    <div>
                        <a>
                            {b.transactions.length} txns
                        </a>
                    </div>
                </div>
                
            </List.Item>
        )}
        />
            
    )
}

export default Blocks;