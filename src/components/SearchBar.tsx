import { useState } from 'react';
import styles from '../styles/components/search.module.scss';
const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.searchButton}>🔎</div>
    </div>
  );
};

export default SearchBar;
