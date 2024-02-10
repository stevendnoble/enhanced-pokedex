import styles from './Pokedex.module.css';

export function Pokedex({ capturedPokemons }) {
  return (
    <div className={styles.pokedexContainer}>
      <h2>My Pokedex</h2>
      <div className={styles.pokemonList}>
        {capturedPokemons.map(pokemon => (
          <div key={pokemon.name} className={styles.pokemonCard}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
