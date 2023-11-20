import React from 'react';
import ArrowDownIcon from '../../assets/icons/arrowDown.svg?react';

import styles from './HeaderLinks.module.scss';

const HeaderLinks: React.FC = () => {
  return (
    <ul className={styles.links}>
      <li className={styles.link}>
        <span className={styles.text}>Dashboard</span>
      </li>
      <li className={styles.link}>
        <span className={styles.text}>Categories</span>
        <ArrowDownIcon className={styles.icon} />
      </li>
      <li className={styles.link}>
        <span className={styles.text}>Saved Images</span>
        <ArrowDownIcon className={styles.icon} />
      </li>
    </ul>
  );
};

export default HeaderLinks;
