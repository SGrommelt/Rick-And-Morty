import styles from "./About.module.css"

export default function About() {
    return (
      <div className={styles.background}>
         <div className={styles.container}>
            <div className={styles.nameContainer}>
               <h2 className={styles.characterName}>Sarah Grommelt</h2>
            </div>
            <div className={styles.detailsContainer}>
               <h2 className={styles.details}>{"-> Status: "}<span>Alive</span></h2>
               <h2 className={styles.details}>{"-> Species: "}<span>Human</span></h2>
               <h2 className={styles.details}>{"-> Gender: "}<span>Female</span></h2>
               <h2 className={styles.details}>{"-> Origin: "}<span>Earth</span></h2>
            </div>
         </div>
            <img className={styles.image} src={require("../../img/AboutPhoto.png")} alt="" />
      </div>
    );
 }