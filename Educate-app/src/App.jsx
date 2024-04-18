import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav_bar/nav_bar';
import PaymentsPage from './components/payment/payment_page';
import Landing from './components/nav_bar/landing/landing';
import Categories_page from './components/categories_page';
import ReviewPage from './components/review_page';

function App() {
    return (
        <Router>
            <NavBar />  
            <Routes>
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/categories" element={<Categories_page />} />
                <Route path="/review" element={<ReviewPage />} />
            </Routes>  
        </Router>
    );
}

export default App;
