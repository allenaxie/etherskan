import classes from './Footer.module.scss';
import { Badge, Divider } from 'antd';
import { GithubOutlined, WechatOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <span>Etherskan</span>
                <div>
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <GithubOutlined />
                    <WechatOutlined />
                </div>

            </div>
            <div className={classes.col2}>
                <span className={classes.col2Heading}>Company</span>
                <Divider className={classes.divider}/>
                <div className={classes.col2List}>
                    <span>About Us</span>
                    <span>Contact Us</span>
                    <span>Brand Assets</span>
                    <span className={classes.careers}>Careers</span>
                    <span>Terms of Service</span>
                </div>

            </div>
            <div className={classes.col3}>column 1</div>
            <div className={classes.col4}>column 1</div>
        </div>
    )
}

export default Footer;