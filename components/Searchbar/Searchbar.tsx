import classes from './Searchbar.module.scss';
import { Input, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';


const Searchbar = () => {

    const { Search } = Input;

    const router = useRouter();

    function handleSearch (value:any) {
        console.log('searched value',value)
        router.push(`/${value}`)
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
                placeholder="Search by Txn Hash / Block"
                allowClear
                onSearch={handleSearch}
                className={classes.searchbar}
            />
        </div>
    )
}

export default Searchbar;