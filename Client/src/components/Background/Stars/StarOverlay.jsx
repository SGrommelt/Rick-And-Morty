import styles from "./StarsOverlay.module.css";

export default function StarsOverlay() {
   return (
    <div className={styles.space}>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
    </div>
   );
}