// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCustomer from './pages/AddCustomer';
import CustomerDetails from './pages/CustomerDetails';
import Header from './components/Header';
import './App.css';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
          <Route
            path="/add-customer"
            element={<PrivateRoute><AddCustomer /></PrivateRoute>}
          />
          <Route
            path="/customer/:id"
            element={<PrivateRoute><CustomerDetails /></PrivateRoute>}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
