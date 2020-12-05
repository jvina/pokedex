import '../css/searchbar.css'

import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';


function SearchBar() {
  return (
    <div className="container h-100">
    <Toolbar />
    <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" placeholder="Search for a Pokémon..." />
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
    </div>
    </div>

  )
}

export default SearchBar
