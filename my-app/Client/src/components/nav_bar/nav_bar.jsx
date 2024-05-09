import React, { useState, useRef } from 'react';
import SearchBar from './searchbar/searchBar';
import Slider from './toogle/slider';
import LanguageDropdown from './language/language';
import HeadingBanner from './banner/banner';
import Modal from './modal/modal';
import Categories from './categories/categories';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = ({user}) => {
    const categories = [
        {
            heading: 'Electronics',
            subcategories: ['Mobile Phones', 'Laptops', 'Cameras']
        },
        {
            heading: 'Clothing',
            subcategories: ['Men', 'Women', 'Kids']
        }
    ];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const timeoutRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setShowCategories(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowCategories(false);
        }, 300); // 300 milliseconds delay before hiding
    };

    const handleCategoriesMouseEnter = () => {
        clearTimeout(timeoutRef.current);
    };

    const handleCategoriesMouseLeave = () => {
        setShowCategories(false);
    };

    return (
        <>
            <header>
                <HeadingBanner 
                    title="Welcome to My Website" 
                    subtitle="A place for all things awesome" 
                    background="path/to/your/image.jpg" 
                />
                <nav id="nav_bar">
                    <ul className="left">
                        <li><a href="index.html">logo</a></li>
                        <li>
                            <Link to="/categories" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Categorias</Link>  
                        </li>
                        <li><Link to="/create">Crear</Link></li>
                        <li><Link to="/review">Revisar</Link></li>
                    </ul>
                    <SearchBar />
                    <ul className = "right">
                    <Link to="/payments">{user.balance} coins</Link>
                        <Slider />
                        <LanguageDropdown />
                        {user.logged ? (
                            <h2 id="profile" onClick={openModal}>Profile</h2>
                        ) : (
                            <h2 id="login" onClick={openModal}>Login</h2>
                        )}
                    </ul>
                    
                </nav>
            </header>
            <Modal isOpen={isModalOpen} onClose={closeModal} user={user} />
            {showCategories && (
                <div 
                    className="categories" 
                    onMouseEnter={handleCategoriesMouseEnter}
                    onMouseLeave={handleCategoriesMouseLeave}
                >
                    {categories.map((category, index) => (
                    <Categories
                    key={index}
                    heading={category.heading}
                    subcategories={category.subcategories}
                    />))}
                </div>
            )}
        </>
    );
};

export default NavBar;
