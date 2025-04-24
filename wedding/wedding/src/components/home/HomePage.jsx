// Import necessary modules from Next.js and React
import React from 'react';
import styles from './HomePage.module.css'; // Import a separate CSS module for styling
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.background} />

      {/* Content */}
      <div className={styles.content}>
        <Link href="/mainpage" className={styles.button}>Welcome</Link>
      </div>
    </div>
  );
};

export default HomePage;
