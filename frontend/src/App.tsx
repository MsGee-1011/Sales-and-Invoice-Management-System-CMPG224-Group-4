import React, { useState } from 'react';
import { Login, ProductForm, ProductList, SalesReport } from './components';
import { Home, Dashboard } from './pages';
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