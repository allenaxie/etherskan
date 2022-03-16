import classes from './Navbar.module.scss';
import Image from 'next/image';


const Navbar = () => {
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
                    Blockchain
                </div>
                <div className={classes.navItem}>
                    Tokens
                </div>
                <div className={classes.navItem}>
                    Resources
                </div>
                <div className={classes.navItem}>
                    More
                </div>
                <div className={classes.navItem}>
                    Sign In
                </div>
            </div>
        </nav>
    )
}

export default Navbar;