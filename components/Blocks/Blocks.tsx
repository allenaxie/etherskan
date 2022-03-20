import classes from './Blocks.module.scss';
import { List, Button, Typography, Avatar } from 'antd';
import moment from 'moment';


const Blocks = ({ blocks, handleSearch }: any) => {

    const { Paragraph } = Typography;

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
            renderItem={(b: any, index) => (
                <List.Item key={index} className={classes.listItemContainer}>
                    <div className={classes.col1}>
                        <div className={classes.avatarContainer}>
                            <Avatar size={40} shape="square">
                                Bk
                            </Avatar>
                        </div>
                        <List.Item.Meta
                            title={
                                <Paragraph copyable={{text: `${b.number}`}} className={classes.blockNumber}>
                                    <button className={classes.blockBtn} onClick={() => handleSearch(b.number)}>
                                        {b.number}
                                    </button>
                                </Paragraph>
                            }
                            description={
                                <span className={classes.timestamp}>
                                    {moment(b.timestamp * 1000).startOf('minutes').fromNow()}
                                </span>
                            }
                        />
                    </div>
                    <div className={classes.col2}>
                        <div className={classes.minerContainer}>
                            <Paragraph ellipsis={{ rows: 1 }}>
                                Miner:
                                <span className={classes.miner}>
                                    {b.miner}
                                </span>
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