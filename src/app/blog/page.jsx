import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'



async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"});

  if(!res.ok){
    return res.status(500).json({message : "Internal Server Error"})
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=> (
        // <Link href="/blog/testId" className={styles.container} key={item.id}>
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={200}
          className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.body}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog