// components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>CreditKhaata</h1>
      {isAuthenticated && (
        <nav>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/add-customer" className="mr-4">Add Customer</Link>
          <button onClick={logout}>Logout</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
