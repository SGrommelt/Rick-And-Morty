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
         <h1>DETAIL</h1>
         {character ? <>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Origin | {character.origin?.name}</h3>
            <h3>Specie | {character.species}</h3>
            <h3>Gender | {character.gender}</h3>
         </> : null }
      </div>
   );
 }