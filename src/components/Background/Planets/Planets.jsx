import styles from "./Planets.module.css";

export default function Planets() {
   return (
    <div className={styles.area}>
        <div className={styles.elements}>
            <img src={require("../../../img/Planets/Planet1.png")} alt="" />
            <img src={require("../../../img/Planets/Planet2.png")} alt="" />
            <img src={require("../../../img/Planets/Planet3.png")} alt="" />
            <img src={require("../../../img/Planets/Planet4.png")} alt="" />
            <img src={require("../../../img/Planets/Planet5.png")} alt="" />
            <img src={require("../../../img/Planets/Planet6.png")} alt="" />
            <img src={require("../../../img/Planets/Planet7.png")} alt="" />
            <img src={require("../../../img/Planets/Planet8.png")} alt="" />
            <img src={require("../../../img/Planets/Planet9.png")} alt="" />
            <img src={require("../../../img/Planets/Planet10.png")} alt="" />
        </div>
    </div>
   );
}