import React, { useState } from 'react';
import '../styles/categories.css';

const Categories = () => {
    const [currentOpenDetails, setCurrentOpenDetails] = useState(null);

    // Define categories data
    const categories = [
        { name: 'Category 1', description: 'Description for Category 1', subcategories: ['Subcategory A', 'Subcategory B', 'Subcategory C'] },
        { name: 'Category 2', description: 'Description for Category 2', subcategories: ['Subcategory X', 'Subcategory Y', 'Subcategory Z'] },
        { name: 'Category 3', description: 'Description for Category 3', subcategories: ['Subcategory P', 'Subcategory Q', 'Subcategory R'] }
        // Add more categories as needed
    ];

    const handleCategoryClick = (detailsRef) => {
        // Close currently opened box
        if (currentOpenDetails && currentOpenDetails !== detailsRef) {
            currentOpenDetails.classList.remove('open');
        }
        console.log("selected ${detailsRef}")
        detailsRef.classList.toggle('open');
        setCurrentOpenDetails(detailsRef);
    };

    return (
        <div className="category-container">
            {/* Populate category container with categories */}
            {categories.map((category, index) => (
                <div className="category" key={index} onClick={() => handleCategoryClick(document.querySelector(`#details-${index}`))}>
                    <div className="category-name">
                        {category.name}
                    </div>
                    <div className="category-details" id={`details-${index}`}>
                        <p>{category.description}</p>
                        <ul className="subcategories">
                            {category.subcategories.map((subcategory, subIndex) => (
                                <li key={subIndex}>{subcategory}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
