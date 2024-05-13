import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentsPage from './components/payment/payment_page';
import Landing from './components/landing/landing';
import Categories_page from './components/categories_page/categories_page';
import ReviewPage from './components/review/review_page';
import NavBar from './components/nav_bar/nav_bar';
import Create from './components/creator/create';
import Documents_page from './components/documents/documents_page';
import Documents_content_page from './components/document_content/document_content_page';
import Home from './components/home/home';
function App() {
    const [user, setUser] = useState({
        logged: false,
        balance:0,
        mail:"prueba@gmail.com",
        addBalance: function(amount) {
            setUser(prevUser => ({
                ...prevUser,
                balance: prevUser.balance + amount,
            }));
        },
        reduceBalance: function(amount) {
            setUser(prevUser => ({
                ...prevUser,
                balance: prevUser.balance - amount,
            }));
        },
        login: function(name,mail,balance) {
            setUser({
                logged: true,
                username: name,
                mail: mail,
                balance: balance,
                login: this.login,
                logout: this.logout,
                addBalance: this.addBalance,
                reduceBalance: this.reduceBalance,
            });
        },
        logout: function() {
            setUser({
                logged: false,
                username: '',
                mail: '',
                balance: 0,
                login: this.login,
                logout: this.logout,
                addBalance: this.addBalance,
                reduceBalance: this.reduceBalance,
            });
        },
        register: function(name,mail) {
            setUser({
                logged: true,
                username: name,
                mail: mail,
                balance: 200,
                login: this.login,
                logout: this.logout,
                addBalance: this.addBalance,
                reduceBalance: this.reduceBalance,
            });
        },
        username: 'John Doe'
    });

    return (
        <Router>
            <NavBar user={user} />  
            <Routes>
                <Route path="/Home" element={<Home user={user} />} />
                <Route path="/payments" element={<PaymentsPage user={user} />} />
                <Route path="/landing" element={<Landing user={user} />} />
                <Route path="/categories" element={<Categories_page user={user} />} />
                <Route path="/documents/:categoryId" element={<Documents_page user={user} />} /> 
                <Route path="/documents/:categoryId/:documentId" element={<Documents_content_page/>} />
                <Route path="/review" element={<ReviewPage user={user} />} />
                <Route path="/create" element={<Create user={user} />} />
            </Routes>  
        </Router>
    );
}

export default App;