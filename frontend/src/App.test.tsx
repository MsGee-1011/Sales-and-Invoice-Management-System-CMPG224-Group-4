import React, { useState } from 'react';
import Login from './components/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SalesReport from './components/SalesReport';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return (
          <div>
            <ProductForm />
            <ProductList />
          </div>
        );
      case 'sales':
        return <SalesReport />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales and Invoice Management System</h1>
        {isLoggedIn && (
          <nav>
            <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
            <button onClick={() => setCurrentPage('products')}>Products</button>
            <button onClick={() => setCurrentPage('sales')}>Sales Report</button>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        )}
      </header>

      <main>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          renderPage()
        )}
      </main>
    </div>
  );
};

export default App;