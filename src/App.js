import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Card/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Background from './components/Background/Background.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Form from './components/Form/Form';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      const characterId= characters.filter(character => character.id === Number(id));
      if (characterId.length) return alert("The character already exists!");
      if (id < 1 || id > 826 ) return alert("There is no character with the entered id!")
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert("There is no character with the entered id!");
         }
      });
   }

   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)));
   }

   const [access, setAccess] = useState(false);
   const EMAIL = 'sarah.grommelt@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const location = useLocation();

   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <NavBar onSearch={onSearch}/>
            : null
         }
         <Background />
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element ={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
