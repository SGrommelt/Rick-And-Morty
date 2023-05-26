import styles from "./BackgroundOverlay.module.css";

export default function BackgroundOverlay() {
   return (
      <div className={styles.background}>
         <img className={styles.backgroundImg} src={require("../../../img/BackgroundOverlay.png")} alt="" />
      </div>
   );
}
