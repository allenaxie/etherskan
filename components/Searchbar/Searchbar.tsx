import classes from './Searchbar.module.scss';
import { Input, Space, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Searchbar = () => {

    const { Search } = Input;
    function onSearch(value: string) {
        console.log(value);
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">Addresses</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">Tokens</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#">Name Tags</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="#">Labels</a>
            </Menu.Item>
            <Menu.Item key="4">
                <a href="#">Websites</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className={classes.container}>
            <Search
                addonBefore={
                <Dropdown overlay={menu} trigger={['click']}>
                    <a>All Filters <DownOutlined/></a>
                </Dropdown>
                }
                placeholder="Search by Address / Txn Hash / Block / Token / Ens"
                allowClear
                onSearch={onSearch}
                className={classes.searchbar}
            />
        </div>
    )
}

export default Searchbar;