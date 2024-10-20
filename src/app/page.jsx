import Image from "next/image";
import styles from './page.module.css';
import Button from "../components/Button/Button";
// import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Designs for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        {/* <button className={styles.button}>See Our Works</button> */}
        <Button url='/portfolio' text = "See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src='/hero.png' height={500} width={500} alt="home page" />
      </div>
    </div>
  );
}
