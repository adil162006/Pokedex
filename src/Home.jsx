import React from 'react'
import Search from './Search'
import Image from './Image'
import Stats from './Stats'
import { useState } from 'react'

export const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  async function fetchData(query) {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      let data = await response.json();
      setPokemonData(data);
      console.log("Pokemon data:", data);
      setPokemonImage(data.sprites.front_default);
      setPokemonName(data.name.charAt(0).toUpperCase() + data.name.slice(1));
      setPokemonId(data.id);  
      setPokemonType(data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(", "));
      setPokemonStats(data.stats)
      setPokemonAbilities(data.abilities.map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)).join(", "));
      
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
    
  }



  return (

    <div className="main">
      <h1>PokeDex</h1>
      <Search onSearch={fetchData}/>
      <Image 
        imageUrl={pokemonImage} 
        name={pokemonName} 
        id={pokemonId} 
        types={pokemonType} 
     />
      <Stats stats={pokemonStats} abilities={pokemonAbilities}/>
      
    </div>
  )
}
