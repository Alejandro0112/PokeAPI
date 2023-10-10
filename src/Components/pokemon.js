import React, {useState, useEffect} from 'react';
import NavbarPkm from './navbar';
import Stats from './stats';
import '../App.css';
import PokemonCard from './PokemonCard';
import Moves from './Extras/Moves';
import Info from './Extras/Info';
import Dropdown from '../Utilities/Dropdown';

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [region, setregion] = useState(1);
  const [cardPokemon, setCardPokemon] = useState(null);
  const [moviments, setMoviments] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokedex/${region}`)
      .then(response => response.json())
      .then(data => {
        const orderedNames = data.pokemon_entries.map(entry => entry.pokemon_species.name);
        setPokemonList(orderedNames);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [region])

  useEffect(() => {
    const filteredPokemon = pokemonList.filter(filterNamePokemon =>
      filterNamePokemon.toLowerCase().includes(searchPokemon.toLowerCase())
    );
    setFilterPokemon(filteredPokemon);
  }, [pokemonList, searchPokemon]);

  const handleCardClick = (pokemonDetails) => {
    setCardPokemon(pokemonDetails);
  };

  const handleCloseModal = () => {
    setCardPokemon(null);
  };

  const handleMove = (pokemonDetails) => {
    setMoviments(pokemonDetails);
  }

  const handleCloseMoves = () => {
    setMoviments(null);
  }

  const handleStat = (pokemonDetails) => {
    setStats(pokemonDetails);
  }

  const handleCloseStat = () => {
    setStats(null);
  }

  return (
    <div>
      <NavbarPkm searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} region={region} setregion={setregion}/>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 my-6 ">         
        {pokemonList && filterPokemon.map(pokemonName => (
          <PokemonCard key={pokemonName} pokemonName={pokemonName}
           onCardClick={handleCardClick} />
        ))}
      </div>
      <Info pokemonDetails={cardPokemon} onClose={handleCloseModal} onMovesClick={handleMove} onStatsClick={handleStat}/>
      <Moves pokemonDetails={moviments} onClose={handleCloseMoves} ></Moves>
      <Stats pokemonDetails={stats} onClose={handleCloseStat}/>
      
      <Dropdown/>
    </div>
  );
}

export default Pokemon;