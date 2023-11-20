import React from 'react';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.infoSection}>
        <h1 className={styles.title}>Welcome back to Motorway</h1>
        <h2 className={styles.subtitle}>
          The worlds best online car image library taken by professional photographers
        </h2>
      </section>
      <section className={styles.imageSection}>
        <img src="images/hero.png" alt="" />
      </section>
    </div>
  );
};

export default Hero;
