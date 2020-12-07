import React, { Component } from 'react';

const COLORS_TYPE = {
  bug: "B1C12E",
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}

class PokedexCard extends Component {
  state = {
    id: '',
    name: '',
    imageUrl: '',
    types: [],
    typesLoaded: [],
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    abilities: [],
    abilitiesLoaded: [],
    isLoading: false
  }

  async componentDidMount() {
    const { id, name, imageUrl, stats, types, height, weight, abilities}  = this.props
    await this.setState({
      id,
      name,
      imageUrl,
      types,
      stats,
      height,
      weight,
      abilities
    })

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    this.state.stats.map(stat => {
      switch(stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
        default:
          break;
      }
      return ''
    });

    const type = this.state.types.map(type => type.type.name);

    const ability = this.state.abilities.map((ability, index) => {
      if (index === this.state.abilities.length - 1)
        return ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
      return ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) + ", "
    })
    this.setState({
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      typesLoaded: type,
      abilitiesLoaded: ability,
      isLoading: true
    })
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.id}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {
                    this.state.typesLoaded.map(type => (
                      <span
                        key={type}
                        className="badge badge-info badge-pill mr-1"
                        style={{
                          backgroundColor: `#${COLORS_TYPE[type]}`,
                          color: "white"}}>
                        {type}
                      </span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={this.state.imageUrl} alt="pokemon " className="card-img-top rounded mx-auto mt-2" />
              </div>
              <div className="col-md-9">
                <h4 className="mx-auto">{this.state.name}</h4>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">HP</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.hp}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.hp}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.attack}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.attack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.defense}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.defense}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Speed</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.speed}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.speed}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Attack</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.specialAttack}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.specialAttack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Defense</div>
                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressBar"
                        style={{width: `${this.state.stats.specialDefense}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.stats.specialDefense}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <h5 className="card-title text-center">Profile</h5>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center"><strong>Height: </strong> {this.state.height} feet</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center"><strong>Weight: </strong>{this.state.weight} lbs</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center"><strong>Abilities: </strong>{this.state.abilitiesLoaded}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
       <br />
      </div>
    )
  }
}

export default PokedexCard
