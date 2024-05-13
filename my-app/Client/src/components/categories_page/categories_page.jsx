import Categories from "./categories/categories";
import ChatContainer from "../chat/chat";
import Ad from "../ads/ads";
import React, { useState, useEffect } from 'react';
import './categories_page.css';

const Categories_page = ({ user }) =>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories_tree')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    return(
        <div className="categories-flex">
            <ChatContainer user = {user} />
            <Categories categories = {categories} />
            <Ad />
        </div>
    );
}
export default Categories_page
