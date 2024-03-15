import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemonDetails(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className='details'>
     <div className="pokemon-details">
      {pokemonDetails && (
        <div>
          <h1>{pokemonDetails.name}</h1>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <h2>Abilities:</h2>
          <ul>
            {pokemonDetails.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <h2>Types:</h2>
          <ul>
            {pokemonDetails.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h2>Base Stats:</h2>
          <ul>
            {pokemonDetails.stats.map((stat, index) => (
              <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </div>
        
      )}
    </div>
    </div>
  );
};

export default PokemonDetails;
