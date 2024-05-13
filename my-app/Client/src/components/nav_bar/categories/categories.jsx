// categories.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CategoriesModule = ({ categories }) => {
  return (
    <div className="categories-module">
      {Object.entries(categories).map(([category, subcategories], index) => (
        <div key={index}>
          <h2>
            <Link to={`/documents/${category}`} className="category-link">{category}</Link>
          </h2>
          <ul>
            {subcategories.map((subcategory, subIndex) => (
              <li key={subIndex}>
                <Link to={`/documents/${subcategory}`} className="subcategory-link">{subcategory}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoriesModule;