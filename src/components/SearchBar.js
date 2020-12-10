import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import FetchPokemon from './pokemon/FetchPokemon';
import '../css/searchbar.css'


class SearchBar extends Component {
  state = {
    name: '',
    isSubmitted: false
  };

  handleChange = (event) => {
    this.state.isSubmitted ? this.setState({isSubmitted : false}) :
    this.setState({
      name: event.target.value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    })
  }


  render() {
  return (
      <div className="container h-100">
      <Toolbar />
      <form onSubmit={this.handleSubmit}>
        <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input onChange={this.handleChange} className="search_input" type="text" placeholder="Search for a Pokémon..." />
              <button onClick={this.handleSubmit} className="search_icon"><i className="fas fa-search"></i></button>
            </div>
        </div>
      </form>
      {this.state.isSubmitted ? <FetchPokemon name={this.state.name} /> : null}
      </div>
    )
  }
}

export default SearchBar
