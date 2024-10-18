import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';



async function getData(id){

  // console.log("id=================", id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: "no-store"});

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({params}) => {
  // console.log("params==================", params);

  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" width={40} height={40} className={styles.avatar}/>
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" fill={true} className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Below description paragraph</p>
      </div>
    </div>
  )
}

export default BlogPost