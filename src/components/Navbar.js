import React from 'react';

import ReactLogo from '../images/logo192.png';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={ReactLogo} className={styles.img} />
            <ul className={styles.ul}>
                <li className={styles.li}>Pricing</li>
                <li className={styles.li}>About</li>
                <li className={styles.li}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar