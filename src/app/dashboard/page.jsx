"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'
import useSWR from 'swr'

//using of useEffect is underated currently. use react query or swr hook from next.js which has built in packages like error handling and 
//loading functionality.
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(()=>{
  //   const getData = async() =>{
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"});

  //     if(!res.ok){
  //       setErr(true);
  //     }

  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }

  //   getData();
  // }, [])

  // console.log("data==============", data);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  console.log("data=========", data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard