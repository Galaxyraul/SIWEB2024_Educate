import React, { useState, useRef,useEffect } from 'react';
import SearchBar from './searchbar/searchBar';
import Slider from './toogle/slider';
import LanguageDropdown from './language/language';
import HeadingBanner from './banner/banner';
import Modal from './modal/modal';
import CategoriesModule from './categories/categories';
import './styles.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = ({user}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://d118flx1-5000.uks1.devtunnels.ms/categories_tree')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    
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
        }, 300);
    };

    const handleCategoriesMouseEnter = () => {
        clearTimeout(timeoutRef.current);
    };

    const handleCategoriesMouseLeave = () => {
        setShowCategories(false);
    };
    const location = useLocation();

    let title, subtitle, background;
    switch(location.pathname) {
        case '/landing':
            title = "Bienvenido a EDUCATE";
            break;
        case '/home':
            title = "Inicio";
            break;
        case '/categories':
            title = "Areas del conocimiento";
            subtitle = "Explora y aprende";
            background = "path/to/categories/image.jpg";
            break;
        case '/create':
            title = "Crear";
            subtitle = "Comparte tus conocimientos";
            break;
        case '/review':
            title = "Revisar";
            subtitle = "Gracias por supervisarnos";
            break;
        case '/payments':
            title = "Tienda"
            break;
        default:
            title = location.pathname.split('/').pop();
    }
    return (
        <>
            <header>
                <HeadingBanner 
                    title={title}
                    subtitle={subtitle}
                    background="path/to/your/image.jpg" 
                />
                <nav id="nav_bar">
                    <ul className="left">
                        <li><Link to={user.logged ? "/home":"/landing"}> <img src="https://d118flx1-5000.uks1.devtunnels.ms/resources/images/logo_educate.jpg" alt="logo" /></Link></li>
                        <li>
                            <Link to="/categories" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Areas de conocimiento</Link>  
                        </li>
                        <div className="dropdown">
                            <button className="dropbtn">Participa</button>
                            <div className="dropdown-content">
                                <li><Link to="/create">Crear</Link></li>
                                <li><Link to="/review">Revisar</Link></li>
                            </div>
                        </div>
                    </ul>
                    <SearchBar />
                    <ul className = "right">
                    <Link to="/payments"><div className='balance'>{user.balance}<img className = "coins" src = "https://d118flx1-5000.uks1.devtunnels.ms/resources/images/coins_logo.png" alt = "coins"></img></div></Link>
                        <Slider />
                        <LanguageDropdown />
                        {user.logged ? (
                            <div>
                                <h2 id="profile" onClick={openModal}>{user.username}</h2>
                                <h3 id = "role">{user.role}</h3>
                            </div>
                            
                        ) : (
                            <h2 id="login" onClick={openModal}>Acceder</h2>
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
                    {categories.slice(0, 4).map((category, index) => (
                        <CategoriesModule
                            key={index}
                            categories={{ [category.name]: category.subcategories }}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default NavBar;
