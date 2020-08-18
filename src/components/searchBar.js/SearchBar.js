import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './searchForm/SearchForm';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
