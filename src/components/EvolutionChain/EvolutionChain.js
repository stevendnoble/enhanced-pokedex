import styles from './EvolutionChain.module.css';

// Helper function to recursively render the evolution chain
const renderEvolution = (species, evolutionDetails) => {
  return (
    <div key={species.name}>
      <p>{species.name.toUpperCase()}</p>
      {evolutionDetails && evolutionDetails.length > 0 && (
        evolutionDetails.map(evolution => (
          <div key={evolution.species.name}>
            <p>→ Evolves to: {evolution.species.name.toUpperCase()}</p>
            {evolution.evolves_to && renderEvolution(evolution.species, evolution.evolves_to)}
          </div>
        ))
      )}
    </div>
  );
};

export function EvolutionChain({ evolutionChain }) {
  if (!evolutionChain) {
    return <p>Loading evolution chain...</p>;
  }

  return (
    <div>
      <h2>Evolution Chain</h2>
      {renderEvolution(evolutionChain.chain.species, evolutionChain.chain.evolves_to)}
    </div>
  );
};
