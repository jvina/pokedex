import React, { Component }  from 'react';
import Loader from 'react-loader-spinner';
import Toolbar from '@material-ui/core/Toolbar';
import PokedexCard from './PokedexCard';
import axios from 'axios';

class FetchPokemon extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    name: '',
    image: '',
    id: '',
    stats: [],
    types: [],
    abilites: [],
    height: '',
    weight: '',
    isLoaded: false
  }

  componentDidMount() {
    const { name } = this.props
    axios.get(this.state.url + name)
     .then(res => {
       this.setState({
         name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
         image: res.data.sprites["front_default"],
         id: res.data.id,
         stats: res.data.stats,
         types: res.data.types,
         abilities: res.data.abilities,
         // convert decimetres to feet
         height: (res.data.height / 3.048).toFixed(2),
         // convert hectograms to lbs
         weight: (res.data.weight / 4.536).toFixed(1),
         isLoaded: true
       })
     })
     .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        {this.state.isLoaded ?
          <div className="row justify-content-center">
              <PokedexCard
                name={this.state.name}
                imageUrl={this.state.image}
                id={this.state.id}
                stats={this.state.stats}
                types={this.state.types}
                abilities={this.state.abilities}
                height={this.state.height}
                weight={this.state.weight}
              />
          </div>
          :
          <div className="row justify-content-center">
          <Loader
            type="Oval"
            color="white"
            height={100}
            width={100}
          />
          </div>
       }
      </React.Fragment>
    )
  }
}

export default FetchPokemon
