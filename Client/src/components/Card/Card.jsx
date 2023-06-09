import styles from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card(props) {
   
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = (event) => {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   useEffect(() => {
      props.allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.allCharacters, props.id]);

   const nameLength = (name) => {
      const arr = name.split(" ");
      if(arr !== undefined) {
         if(arr[1]) {
            const shortName = arr[0] + " " + arr[1];
            if(shortName.length > 12) return arr[0];
            else return shortName;
         }
      }
      return name;
   }

   return (
      <div className={styles.cardItem}>
         {
            isFav ? (
               <button className={styles.cardFavoriteButton} onClick={handleFavorite}>
                  <img className={styles.favoritesIcon} src={require("../../img/Favorites/Favorite2.png")} alt="" />
               </button>
            ) : (
               <button className={styles.cardFavoriteButton} onClick={handleFavorite}>
                  <img className={styles.favoritesIcon} src={require("../../img/Favorites/Favorite1.png")} alt="" />
               </button>
            )
         }
         <div>
            {props.onClose ? <button className={styles.cardItemButton} onClick={() => props.onClose(props.id)}>X</button> : null }
         </div>
         <div className={styles.cardItemName}>
            <span className={styles.cardItemNameText}>{nameLength(props.name)}</span>
         </div>
         <Link to={`/detail/${props.id}`}>
            <div className={styles.cardItemDetailsContainer}>
               <div className={styles.cardItemDetails}>
                  <h2 className={styles.cardItemDetailsText}>{"-> Name: "}<span>{props.name}</span></h2>
                  <h2 className={styles.cardItemDetailsText}>{"-> Status: "}<span>{props.status}</span></h2>
                  <h2 className={styles.cardItemDetailsText}>{"-> Species: "}<span>{props.species}</span></h2>
               </div>
            </div>
         </Link>
         <img className={styles.cardItem__img} src={props.image} alt='' />
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = (dispatch) => {
   return ({
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
