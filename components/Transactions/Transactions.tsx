import classes from './Transactions.module.scss';
import { List, Button, Typography, Avatar } from 'antd';


const Transactions = ({ transactions }: any) => {

    const { Paragraph, Text } = Typography;

    // let transactionsArr = transactions.splice(0,10);
    return (
        <List
            bordered
            className={classes.listContainer}
            dataSource={transactions}
            header={<span className={classes.listHeader}>Latest Transactions</span>}
            footer={
                <div className={classes.footer}>
                    <Button className={classes.button}>View all transactions</Button>
                </div>
            }
            renderItem={(t, index): any => (
                <List.Item key={index}>
                    <div className={classes.col1} >
                        <div className={classes.txAvatarContainer}>
                            <Avatar size={30} icon="Tx" />
                        </div>
                        <div className={classes.txHash}>
                            <Paragraph ellipsis={{ rows: 1 }}>
                                <a>
                                    {t.hash}
                                </a>
                            </Paragraph>
                        </div>
                    </div>
                    <div className={classes.col2}>
                        <Paragraph ellipsis={{ rows: 1 }}>
                                From: <a>{t.from}</a>
                            
                        </Paragraph>
                        <Paragraph ellipsis={{ rows: 1 }}>

                                To: <a>{t.to}</a>
                         
                        </Paragraph>
                    </div>

                </List.Item>
            )}
        />

    )
}

export default Transactions;