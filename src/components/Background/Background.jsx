import styles from "./Background.module.css";
import StarsOverlay from './Stars/StarOverlay.jsx';
import Planets from './Planets/Planets.jsx';
import BackgroundOverlay from "./Overlay/BackgroundOverlay.jsx";

export default function Background() {
   return (
      <div className={styles.background}>
         <img className={styles.backgroundImg} src="https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785_1280.jpg" alt="" />
         <StarsOverlay />
         <Planets />
         <BackgroundOverlay />
      </div>
   );
}
