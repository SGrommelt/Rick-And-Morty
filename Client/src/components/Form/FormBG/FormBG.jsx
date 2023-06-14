import styles from "./FormBG.module.css";

export default function FormBG() {

    return (
      <div className={styles.space}>
        <div className={styles.particles}>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
        </div>
        <img className ={styles.backgroundImg} src={require("../../../img/Login.png")} alt="" />
      </div>
   );
}