import styles from "./Favorites.module.css";

import { orderCards, filterCards } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

function Favorites(props) {
    
  const dispatch = useDispatch();

  const [ aux, setAux ] = useState(false);
    
    
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    aux ? setAux(false) : setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  useEffect(() => {dispatch(filterCards("All"))}, [dispatch]);

  return (
    <div className={styles.background}>
      {/* <h1>Favorites</h1> */}
      <div className={styles.filtersContainer}> 
        <select name="order" className={styles.dropDown} onChange={handleOrder}>
          <option className={styles.option} value="A">Ascendent</option>
          <option className={styles.option} value="D">Descendent</option>
        </select>
        <select name="filter" className={styles.dropDown} onChange={handleFilter}>
          <option className={styles.option} value="All">All</option>
          <option className={styles.option} value="Male">Male</option>
          <option className={styles.option} value="Female">Female</option>
          <option className={styles.option} value="Genderless">Genderless</option>
          <option className={styles.option} value="unknown">unknown</option>
        </select>
        </div> 
      {
          props.myFavorites.map(favorite =>
            <div className={styles.cardsContainer}>
              <div className={styles.cardItem}>
                <div className={styles.cardItemName}>
                    <span className={styles.cardItemNameText}>{props.name}</span>
                </div>
                    <div className={styles.cardItemDetailsContainer}>
                      <div className={styles.cardItemDetails}>
                          <h2 className={styles.cardItemDetailsText}>{"-> Name: "}<span>{favorite.name}</span></h2>
                          <h2 className={styles.cardItemDetailsText}>{"-> Status: "}<span>{favorite.status}</span></h2>
                          <h2 className={styles.cardItemDetailsText}>{"-> Species: "}<span>{favorite.species}</span></h2>
                      </div>
                    </div>
                <img className={styles.cardItem__img} src={favorite.image} alt='' />
              </div>
            </div>
          )
      }
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
     myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);