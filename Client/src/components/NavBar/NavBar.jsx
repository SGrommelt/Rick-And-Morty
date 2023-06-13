import styles from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Menu from '../Menu/Menu.jsx'; 
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
   return (
      <div className={styles.navBar}>
         {/* <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <NavLink to="/favorites">
            <button>Favorites</button>
         </NavLink> */}
         <Menu />
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}
