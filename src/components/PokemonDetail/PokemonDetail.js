import { EvolutionChain } from '../EvolutionChain/EvolutionChain';
import styles from './PokemonDetail.module.css';

export function PokemonDetail({ pokemon, evolutionChain, onCapture }) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.pokemonInfo}>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <p className={styles.detailText}><b>Type:</b> {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p className={styles.detailText}><b>Abilities:</b> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <div className={styles.pokemonStats}>
          <h3>Stats</h3>
            {pokemon.stats.map((stat) => (
              <p key={stat.stat.name} className={styles.detailText}><b>{`${stat.stat.name}:`}</b> {`${stat.base_stat}`}</p>
            ))}
         </div>
        {/* Add more details as needed */}
        <button onClick={() => onCapture(pokemon)} className={styles.captureBtn}>Capture</button>
      </div>
      <div className={styles.evolutionChain}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.detailImage} />
        <EvolutionChain evolutionChain={evolutionChain} />
      </div>
    </div>
  );
}
