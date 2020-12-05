import React, { Component } from 'react';
import PokedexCard from './components/PokedexCard.js';
import SearchBar from './components/SearchBar.js';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <PokedexCard />
      </div>
    );
  }
}

export default App;
