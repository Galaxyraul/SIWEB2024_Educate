import React from 'react';
import './styles.css'
const SearchBar = () => {
    return (
        <div className="search">
            <input type="text" id="searchbar" placeholder="Barra de búsqueda" />
            <button   id="search_button">buscar</button>
        </div>
    );
};

export default SearchBar;
