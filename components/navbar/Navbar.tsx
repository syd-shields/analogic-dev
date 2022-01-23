import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Analogic</h1>
      <input className={styles.searchbar} type="text" placeholder="Search for photography gear..."></input>
      <button className={styles.sellGear}>Sell Photo Gear</button>
      <button className={styles.myCollection}>My Collection</button>
      <button className={styles.login}>Login</button>
      <button className={styles.signup}>Sign Up</button>
      <button className={styles.menu}></button>
    </div>
  );
}
