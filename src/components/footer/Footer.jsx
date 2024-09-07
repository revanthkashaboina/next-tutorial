import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2024 Universia. All rights reversed.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Universia facebook" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Universia instagram" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Universia twitter" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Universia youtube" />
        </div>
    </div>
  )
}

export default Footer