import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {

   const { id } = useParams();

   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
      <div className={styles.background}>
            {character ? <>
               <div className={styles.container}>
               <div className={styles.nameContainer}>
                  <h2 className={styles.characterName}>{character.name}</h2>
               </div>
               <div className={styles.detailsContainer}>
               <h2 className={styles.details}>{"-> Status: "}<span>{character.status}</span></h2>
               <h2 className={styles.details}>{"-> Species: "}<span>{character.species}</span></h2>
               <h2 className={styles.details}>{"-> Gender: "}<span>{character.gender}</span></h2>
               <h2 className={styles.details}>{"-> Origin: "}<span>{character.origin?.name}</span></h2>
               </div>
               </div>
               <img className={styles.image} src={character.image} alt={character.name} />
               </> : null }
      </div>
   );
 }