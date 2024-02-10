import { useState } from 'react';
import { Search } from './components/Search/Search';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { Pokedex } from './components/Pokedex/Pokedex';
import { fetchPokemonDetails, fetchPokemonSpecies, fetchEvolutionChain } from './api/pokeApi';
import './App.css';

export function App() {
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (pokemonName) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch the basic Pokémon details
      const details = await fetchPokemonDetails(pokemonName);

      // Once we have the details, fetch the species information for the evolution chain URL
      const species = await fetchPokemonSpecies(details.id);

      // Now, fetch the actual evolution chain data using the URL from the species data
      const evolutionData = await fetchEvolutionChain(species.evolution_chain.url);

      setPokemon(details);
      setEvolutionChain(evolutionData);
    } catch (err) {
      console.error("Failed to fetch Pokémon data:", err);
      setError('Failed to fetch Pokémon data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const capturePokemon = pokemon => {
    if (!capturedPokemons.find(p => p.name === pokemon.name)) {
      setCapturedPokemons(prev => [...prev, pokemon]);
    }
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {pokemon &&
        <PokemonDetail pokemon={pokemon} evolutionChain={evolutionChain} onCapture={capturePokemon} />
      }
      <Pokedex capturedPokemons={capturedPokemons} />
    </div>
  );
}
