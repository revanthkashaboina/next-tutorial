import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  // console.log("params=============", params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img} 
          fill={true} 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          alt="Category Image"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img} 
          fill={true} 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          alt="Category Image"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img} 
          fill={true} 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          alt="Category Image"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img} 
          fill={true} 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          alt="Category Image"/>
        </div>
      </div>
    </div>
  )
}

export default Category