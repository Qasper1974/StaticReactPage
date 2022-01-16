import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src="../logo192.png" className={styles.img} />
            <ul className={styles.ul}>
                <li className={styles.li}>Pricing</li>
                <li className={styles.li}>About</li>
                <li className={styles.li}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar