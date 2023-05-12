import logo from './logo.svg';
import React from 'react'
import './App.css';
//import SearchBar from './components/searchBar'


function App() {
  return (
    <header>
      <p>Our Food Family</p>
      <button class = "btn">
        <img src= "settings.png" alt = "settings" 
        onClick={ButtonFiller()} width="50" height = "50" color = "none"/>
      </button>
    </header>

    

// not sure what stuff below does but i need it for search bar
/*
<div classname='App'>
  <SearchBar/>
</div>
*/
  );
}

function ButtonFiller() {
  console.log("clicked");
}


export default App;
