import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const SearchBar = () => {
    const [lectures, setLectures] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://d118flx1-5000.uks1.devtunnels.ms/lectures')
            .then(response => response.json())
            .then(data => setLectures(data));

        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleItemClick = (lecture) => {
        console.log(lecture);
        fetch(`https://d118flx1-5000.uks1.devtunnels.ms/lectures_get_categories/${lecture.name}`) 
            .then(response => response.json())
            .then(categories => {
                console.log(categories)
                if (categories.length > 0) {
                    navigate(`/documents/${categories[0].name}/${lecture.name}`);
                }
            });
        setSearch('');
        
    };

    const filteredLectures = lectures.filter(lecture =>
        lecture.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5);

    return (
        <div className="search" ref={searchRef}>
            <input type="text" id="searchbar" placeholder="Barra de búsqueda" value={search} onChange={handleSearch} />
            <button id="search_button">buscar</button>
            {search && (
                <div className="search-dropdown">
                    {filteredLectures.map(lecture => (
                        <div key={lecture.name} className="search-item" onClick={() => handleItemClick(lecture)}>{lecture.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;