import { useState } from 'react';
import styles from './Search.module.css';

export function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Pokémon name or ID"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
}
