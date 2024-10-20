import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
  title: "Contact",
  description: "This is contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/contact.png' alt="contact page image" fill={true}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input}/>
          <input type="text" placeholder='Email' className={styles.input}/>
          <textarea placeholder='Message' rows={10} className={styles.textarea} />
          <Button url="#" text="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact