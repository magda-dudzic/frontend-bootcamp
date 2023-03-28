import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Hey!</p>
      <a href="/about" className={styles.paragraph}>
        Click me!
      </a>
    </div>
  );
}
