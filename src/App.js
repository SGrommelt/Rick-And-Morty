import React, { useState } from 'react';
import './App.css';
import Cards from './components/Card/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Background from './components/Background/Background.jsx';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)));
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Background />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
