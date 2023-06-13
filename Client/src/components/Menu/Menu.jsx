import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
   return (
    <div className={styles.background}>
        <div className={styles.nav}>
            <input type="checkbox" className={{checked: styles.checkbox}} />
            <span></span>
            <span></span>
            <div className={styles.menu}>
                <li>
                    <NavLink to="/home">
                        <button className={styles.button}>Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <button className={styles.button}>About</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">
                        <button className={styles.button}>Favorites</button>
                    </NavLink>
                </li>
            </div>
        </div>
    </div>
   );
}