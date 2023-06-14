import styles from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import Menu from '../Menu/Menu.jsx'; 

export default function NavBar(props) {
   return (
      <div className={styles.navBar}>
         <Menu />
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}
