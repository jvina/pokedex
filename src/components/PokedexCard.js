import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FetchPokemon from '../api/PokeAPI';

function PokedexCard() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async() => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="justify-content-center">

    </div>
  )
}

export default PokedexCard
