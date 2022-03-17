import classes from './Transactions.module.scss';
import {List, Button, Typography, Avatar} from 'antd';


const Transactions = ({transactions}:any) => {

    const { Paragraph, Text } = Typography;

    

    //   console.log(transactions.splice(0,10));
      let transactionsArr = transactions.splice(0,10);
    return (
        <List
        bordered
        className={classes.listContainer}
        dataSource={transactionsArr}
        header={<span className={classes.listHeader}>Latest Transactions</span>}
        footer={
            <div className={classes.footer}>
                <Button className={classes.button}>View all transactions</Button>
            </div>
            }
        renderItem={(item,index):any => (
            <List.Item key={index}>
                <div className={classes.col1} >
                    <div className={classes.txAvatarContainer}>
                        <Avatar size={30} icon="Tx"/>
                    </div>
                    <div className={classes.txHash}>
                            <Paragraph ellipsis={{rows:1}}>
                        <a>
                                {item}
                        </a>
                            </Paragraph>
                    </div>
                </div>
                <div className={classes.col2}>
                    <div>From:</div>
                    <div>To:</div>
                </div>
                
            </List.Item>
        )}
        />
            
    )
}

export default Transactions;