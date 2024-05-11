import React, { useState } from 'react';
import "./tags.css";

const TagSelector = ({ tags }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
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
          filteredTags.map((tag) => (
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