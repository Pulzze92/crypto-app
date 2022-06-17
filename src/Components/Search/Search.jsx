import React from 'react';
import styles from './Search.scss';

const Search = ({ active, setActive }) => {
  return (
    <div className={active ? 'search active' : 'search'} onClick={() => setActive(false)}>
      <div className="search-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="search-title">
          <h2>Search user</h2>
        </div>
        <div className="search-field">
          <input type="text" />
        </div>
        <div className="close-btn">
          <button onClick={() => setActive(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
