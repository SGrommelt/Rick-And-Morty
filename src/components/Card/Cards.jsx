import Card from './Card';
import styles from "./Card.module.css";

export default function Cards(props) {
   return (
      <div className={styles.cardsContainer}>
         {
            props.characters.map(character => 
                  <Card key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
            )
         }
      </div>
   );
}
