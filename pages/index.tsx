import Head from "next/head";
import styles from '../styles/Home.module.scss'
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Analogic | Gear made easy</title>
        <meta name="description" content="something about the site here" />
      </Head>
      <div className={styles.homepage}>
        <Navbar />
      </div>
    </div>
  );
}
