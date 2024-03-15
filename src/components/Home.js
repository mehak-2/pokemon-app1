import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=20');
      setPokemons(result.data.results);
      setFilteredPokemons(result.data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(term)));
  };

  const handlePokemonClick = (index) => {
    history.push(`/pokemon/${index + 1}`);
  };

  return (
    <div className='body'>
      <div className='head'>
        <h1>Pokémon Hub</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Pokémon by name..."
        />
      </div>
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, index) => (
          <div key={index}>
            <button className="pokemon-card-button" onClick={() => handlePokemonClick(index)}>
              <div className="pokemon-card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
