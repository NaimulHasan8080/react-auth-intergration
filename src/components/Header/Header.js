import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './header.css'
const Header = () => {
    // const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/checkout">Checkout</Link>
            <span>{user?.displayName} </span>
            {user?.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;