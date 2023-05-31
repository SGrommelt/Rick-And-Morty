import styles from "./Favorites.module.css";
import Card from "../Card/Card.jsx"
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

  useEffect(() => {dispatch(filterCards("All"))}, []);

  return (
    <div className={styles.background}>
      <h1>Favorites</h1>
      <select name="order" onChange={handleOrder}>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
      </select>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {
      props.myFavorites.map(favorite => 
          <Card key={favorite.id}
          id={favorite.id}
          name={favorite.name}
          status={favorite.status}
          species={favorite.species}
          gender={favorite.gender}
          origin={favorite.origin.name}
          image={favorite.image}
          />
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