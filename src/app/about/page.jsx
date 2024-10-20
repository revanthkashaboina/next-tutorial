import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../../components/Button/Button'

export const metadata = {
  title: "About",
  description: "This is about page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fill={true} alt='about page image' />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Universia is a network that consists of 862 universities in 22 countries: Andorra, Argentina, Bolivia, Brazil, Chile, Colombia, Costa Rica, Dominican Republic, Ecuador, El Salvador, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Portugal, Spain, United States, Uruguay, and Venezuela.
            <br />
            <br />
            The network operates a global website that provides services like job searching and themed news. Universia network represented 250,000 registered users as of 2021. Universia is a company of the Santander Group Jaume Pagès Fita has been the CEO of Universia since 2005.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our History</h1>
          <p className={styles.desc}>Universia was created in July 2000 as an internet initiative in the higher education sector.
            <br/>
            It is promoted by a group of Spanish universities with the support of the Spanish University Rectors' Board, the Spanish National Research Council and sponsored by the Santander Group.
          </p>
          <Button url="/contact" text = "Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About