import styles from "./Background.module.css";

export default function Background() {
   return (
      <div className={styles.background}>
        <img className={styles.backgroundImg} src="https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785_1280.jpg" alt="" />
      </div>
   );
}
