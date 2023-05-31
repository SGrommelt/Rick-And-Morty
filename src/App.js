import React, { useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Cards from './components/Card/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Background from './components/Background/Background.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
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
         <Routes>
            <Route path="/home" element ={
               <Cards characters={characters} onClose={onClose}/>
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
