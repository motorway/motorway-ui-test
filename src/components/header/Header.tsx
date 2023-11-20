import React from 'react';

import Logo from '../../assets/icons/logo.svg?react';
import Task1 from '../task1/Task1';
import HeaderLinks from './HeaderLinks';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <Task1 />
        <HeaderLinks />
      </div>
    </header>
  );
};

export default Header;
