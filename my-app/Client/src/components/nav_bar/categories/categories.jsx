import React from 'react';
import './styles.css'; // Import the CSS file for styling

const Categories = ({ heading, subcategories }) => {
  return (
    <div className="categories-container">
      <h2 className="category-heading">{heading}</h2>
      <div className="subcategory-blocks">
        {subcategories.map((subcategory, index) => (
          <a key={index} href={`#${subcategory}`} className="subcategory-block">
            {subcategory}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
