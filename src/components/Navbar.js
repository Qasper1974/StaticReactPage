import React from 'react';

import ReactLogo from '../images/logo192.png';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={ReactLogo} className={styles.img} />
            <h1>React Facts</h1>
            <h2>Static React Page</h2>
        </nav>
    )
}

export default Navbar