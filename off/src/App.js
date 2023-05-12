//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Restaurants } from './components/restaurants';
import contents from './info';

function App() {
  return (
    <div className='App'>
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

export default App;
