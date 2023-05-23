import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={styles.searchBarContainer}>
         <input type='search' className={styles.input} placeholder="Ingrese ID..." />
         <button onClick={props.onSearch} className={styles.searchButton}>
            <span className={styles.buttonFirstTitle}>+</span>
            <span className={styles.buttonSecondTitle}>add</span>
         </button>
      </div>
   );
}
