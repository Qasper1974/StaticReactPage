import React from 'react';

import styles from './Main.module.css';

 const Main = () => {
     return (
         <div className={styles.container}>
            <h2 className={styles.title}>
                Fun Facts about React
            </h2>
            <ul>
                <li className={styles.main__listItem}>Released in 2013</li>
                <li className={styles.main__listItem}>Created by J. Walke</li>
                <li className={styles.main__listItem}>Has over 100K stars on GitHub</li>
                <li className={styles.main__listItem}>Maintained by Facebook</li>
            </ul>
         </div>
     )
 }

export default Main;