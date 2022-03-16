import classes from './Blocks.module.scss';
import {List} from 'antd';

const Blocks = () => {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    return (
        <List
        className={classes.listContainer}
        dataSource={data}
        header={<span className={classes.listHeader}>Latest Blocks</span>}
        renderItem={item => (
            <List.Item key="1">
                <List.Item.Meta
                title="Title"
                description="description"
                />
                <div>{item}</div>
                
            </List.Item>
        )}
        />
            
    )
}

export default Blocks;