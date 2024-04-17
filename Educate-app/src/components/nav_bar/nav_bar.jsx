import React from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import Slider from './slider';
import LanguageDropdown from './language';
import ProfileDropdown from './profile';
import LoginModal from './login';
import HeadingBanner from './banner';
import '../../styles/nav_bar.css';
import '../../styles/banner.css';


const NavBar = () => {
    return (
        <header>
            <HeadingBanner 
                title="Welcome to My Website" 
                subtitle="A place for all things awesome" 
                background="path/to/your/image.jpg" 
            />
            <nav id="nav_bar">
                <Logo />
                <SearchBar />
                <Slider />
                <LanguageDropdown />
                <ProfileDropdown />
            </nav>
            <LoginModal />
        </header>
    );
};

export default NavBar;
