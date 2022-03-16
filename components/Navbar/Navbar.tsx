import classes from './Navbar.module.scss';
import Image from 'next/image';
import {Dropdown, Menu, Avatar} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {

    const blockchainDropdown = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">View Txns</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">View Pending Txns</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <a href="#">View Blocks</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="#">View Uncles</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <a href="#">Top Accounts</a>
            </Menu.Item>
            <Menu.Item key="5">
                <a href="#">Verified Contracts</a>
            </Menu.Item>
        </Menu>
    )
    const tokensDropdown = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">ERC20 Top Tokens</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">ERC721 Top Tokens</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#">ERC1155 Top Tokens</a>
            </Menu.Item>
        </Menu>
    )
    const resourcesDropdown = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">Charts and Stats</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">Top Statistics</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#">Developer APIs</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <a href="#">Ethereum Directory</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <nav className={classes.navContainer}>
            <div className={classes.logoContainer}>
                <Image src="/logo.png" width={30} height={30}/>
                <span>Etherskan</span>
            </div>
            <div className={classes.navItemContainer}>
                <div className={classes.navItem}>
                    Home
                </div>
                <div className={classes.navItem}>
                    <Dropdown overlay={blockchainDropdown} trigger={['hover']}>
                        <a>Blockchain <DownOutlined/></a>
                    </Dropdown>
                </div>
                <div className={classes.navItem}>
                    <Dropdown overlay={tokensDropdown} trigger={['hover']}>
                        <a>Tokens <DownOutlined/></a>
                    </Dropdown>
                </div>
                <div className={classes.navItem}>
                    <Dropdown overlay={resourcesDropdown} trigger={['hover']}>
                        <a>Resources <DownOutlined/></a>
                    </Dropdown>
                </div>
                <div className={classes.navItem}>
                <a href="#">More</a>
                </div>
                <div className={classes.navItem}>
                    <Avatar size={19} icon={<UserOutlined/>} className={classes.userAvatar}/> <a href="#">Sign In</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;