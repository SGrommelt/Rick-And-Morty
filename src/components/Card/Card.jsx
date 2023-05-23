import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.cardItem}>
         <div>
            <button className={styles.cardItemButton} onClick={props.onClose}>X</button>
         </div>
         <div className={styles.cardItemName}>
            <span className={styles.cardItemNameText}>{props.name}</span>
         </div>
         <div className={styles.cardItemDetailsContainer}>
            <div className={styles.cardItemDetails}>
               <h2 className={styles.cardItemDetailsText}>{"-> Status: "}<span>{props.status}</span></h2>
               <h2 className={styles.cardItemDetailsText}>{"-> Species: "}<span>{props.species}</span></h2>
               <h2 className={styles.cardItemDetailsText}>{"-> Gender: "}<span>{props.gender}</span></h2>
               <h2 className={styles.cardItemDetailsText}>{"-> Origin: "}<span>{props.origin}</span></h2>
            </div>
         </div>
         <img className={styles.cardItem__img} src={props.image} alt='' />
      </div>
   );
}
