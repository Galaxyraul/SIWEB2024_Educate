import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentsPage from './components/payment/payment_page';
import Landing from './components/nav_bar/landing/landing';
import Categories_page from './components/categories_page';
import ReviewPage from './components/review_page';
import NavBar from './components/nav_bar/nav_bar';
import Create from './components/creator/create';

function App() {
    const [user, setUser] = useState({
        logged: false,
        login: function() {
            this.logged = true;
        },
        logout: function() {
            this.logged = false;
        },
        username: 'John Doe'
    });

    return (
        <Router>
            <NavBar user={user} />  
            <Routes>
                <Route path="/payments" element={<PaymentsPage user={user} />} />
                <Route path="/landing" element={<Landing user={user} />} />
                <Route path="/categories" element={<Categories_page user={user} />} />
                <Route path="/review" element={<ReviewPage user={user} />} />
                <Route path="/create" element={<Create user={user} />} />
            </Routes>  
        </Router>
    );
}

export default App;