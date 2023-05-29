import styles from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
   return (
      <div className={styles.navBar}>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}
