import React, { useState,useEffect } from 'react';
import "./tags.css";


const TagSelector = ({ selectedTags, onTagSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState([]); 
  useEffect(() => {
    fetch('https://d118flx1-5000.uks1.devtunnels.ms/categories')
      .then(response => response.json())
      .then(data => {
        const tagNames = data.map(tag => tag.name);
        setTags(tagNames);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      // If the tag is already selected, remove it from the array
      onTagSelect(selectedTags.filter(t => t !== tag));
    } else {
      // If the tag is not selected, add it to the array
      onTagSelect([...selectedTags, tag]);
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='tags'>
      <input
        type="text"
        placeholder="Search tags"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={`tag-list ${filteredTags.length === 0 ? 'empty' : ''}`}>
        {filteredTags.length === 0 ? (
          <p>No tags found</p>
        ) : (
          filteredTags.slice(0, 10).map((tag) => (
            <div
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TagSelector;