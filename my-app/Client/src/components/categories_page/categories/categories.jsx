import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const Categories = ({ categories }) => {
    const [currentOpenDetails, setCurrentOpenDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const categoriesPerPage = 4;
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
    const totalPages = Math.ceil(categories.length / categoriesPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleCategoryClick = (index) => {
        setCurrentOpenDetails(currentOpenDetails === index ? null : index);
    };

    return (
        <div className='pages-content'>
            <div className="category-container">
                {currentCategories.map((category, index) => (
                    <div className="category" key={index} onClick={() => handleCategoryClick(index)}>
                        <div className="category-name">
                            {currentOpenDetails === index ? 
                                <Link to={`/documents/${category.name}`}>{category.name}</Link> :
                                category.name
                            }
                        </div>
                        <div id={`details-${index}`} 
                            className={`category-details ${currentOpenDetails === index ? 'open' : ''}`}
                            style={{ display: currentOpenDetails === index ? 'block' : 'none' }}>
                            <p>{category.description}</p>
                            <ul className="subcategories">
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex}>
                                        {currentOpenDetails === index ? 
                                            <Link to={`/documents/${subcategory}`}>{subcategory}</Link> :
                                            subcategory
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button 
                    onClick={() => {setCurrentPage(currentPage - 1); setCurrentOpenDetails(null);}} 
                    disabled={currentPage === 1}
                >
                    &#171; Previous
                </button>
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => {setCurrentPage(number); setCurrentOpenDetails(null);}}
                        style={currentPage === number ? { backgroundColor: '#3e9bfd' } : {}}
                    >
                        {number}
                    </button>
                ))}
                <button 
                    onClick={() => {setCurrentPage(currentPage + 1); setCurrentOpenDetails(null);}} 
                    disabled={currentPage === totalPages}
                >
                    Next &#187;
                </button>
            </div>
        </div>
    );
};

export default Categories;
