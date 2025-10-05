import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Welcome to the Sales and Invoice Management System</h2>
      <p>Please log in to access the system features.</p>
      <div className="features">
        <h3>System Features:</h3>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Product Management</h4>
            <p>Add, edit, and manage your product catalog</p>
          </div>
          <div className="feature-card">
            <h4>Sales Tracking</h4>
            <p>Track all sales and customer transactions</p>
          </div>
          <div className="feature-card">
            <h4>Invoice Generation</h4>
            <p>Create and manage professional invoices</p>
          </div>
          <div className="feature-card">
            <h4>Sales Reports</h4>
            <p>Generate detailed sales reports and analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;