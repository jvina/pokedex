import React, { Component } from 'react';
import SearchBar from './components/SearchBar.js';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
