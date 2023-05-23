import './App.css';
import Cards from './components/Card/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import StarsOverlay from './components/Background/Stars/StarOverlay.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Background from './components/Background/Background.jsx';
import Planets from './components/Background/Planets/Planets.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         {/* <NavBar /> */}
         <Background />
         
         <StarsOverlay />
         <Planets />
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
