import styles from "./FormBG.module.css";

export default function FormBG() {

    return (
      <div className={styles.background}>
        <video className={styles.video} loop autoPlay muted>
          <source src={require("../../../img/BG.mp4")} type="video/mp4"></ source>
        </video>
        {/* <div className={styles.particles}>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
          <div class={styles.particle}></div>
        </div> */}
        <img className ={styles.backgroundImg} src={require("../../../img/Login.png")} alt="" />
      </div>
   );
}