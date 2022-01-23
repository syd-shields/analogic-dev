import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <ul>
          <li>Cameras</li>
          <li>Lenses</li>
          <li>Film</li>
          <li>Straps</li>
          <li>Bags</li>
      </ul>
    </div>
  );
}