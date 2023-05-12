import './App.css';
import React from 'react';
import { Restaurants } from './components/restaurants';
import contents from './info';


function App() {
  return (
  <div class = "App">
      <button class = "btn">
        <img src= "settings.png" alt = "settings" 
        onClick={ButtonFiller()} width="50" height = "50" color = "none"/>
      </button>

      <button class = "profileBtn" onClick={profileButton}>         Profile         </button>

      {contents.map(contents => (
        <Restaurants
          key={contents.id}
          image={contents.image}
          name={contents.name}
          tags={contents.tags}
          hours={contents.hours}
          price={contents.price}
          rating={contents.rating}
          distance={contents.distance}
        />
      ))}

    </div>
  );
}

function ButtonFiller() {
  console.log("clicked");
}

function profileButton() {
  console.log("clicked");
}

export default App;
