import classes from './Footer.module.scss';
import Image from 'next/image';
import { Divider } from 'antd';
import { GithubOutlined, WechatOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <div className={classes.logoContainer}>
                    <Image src="/logo.png" width={30} height={30} alt="logo image"/>
                    <span className={classes.logoText}>Etherskan</span>
                </div>
                <div className={classes.socialMediaList}>
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <GithubOutlined />
                    <WechatOutlined />
                </div>

            </div>
            <div className={classes.col2}>
                <span className={classes.colHeading}>Company</span>
                <Divider className={classes.divider}/>
                <div className={classes.colList}>
                    <span>About Us</span>
                    <span>Contact Us</span>
                    <span>Brand Assets</span>
                    <span>Careers</span>
                    <span>Terms of Service</span>
                </div>
            </div>
            <div className={classes.col3}>
                <span className={classes.colHeading}>Resources</span>
                <Divider className={classes.divider}/>
                <div className={classes.colList}>
                    <span>API Documentation</span>
                    <span>Knowledge Base</span>
                    <span>Newsletter</span>
                    <span>Network Status</span>
                    <span>Disqus Comments</span>
                </div>
            </div>
            <div className={classes.col4}>
                <span className={classes.colHeading}>Products & Services</span>
                <Divider className={classes.divider}/>
                <div className={classes.colList}>
                    <span>Advertise</span>
                    <span>Explorer-as-a-Service (EaaS)</span>
                    <span>Developer APIs</span>
                    <span>Blockscan</span>
                    <span>BeaconScan</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;