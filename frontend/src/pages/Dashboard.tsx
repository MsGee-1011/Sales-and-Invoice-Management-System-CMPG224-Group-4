import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>25</p>
        </div>
        <div className="stat-card">
          <h3>Today's Sales</h3>
          <p>$1,250.00</p>
        </div>
        <div className="stat-card">
          <h3>Pending Invoices</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Active Customers</h3>
          <p>48</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>New sale: #10025 - $299.99</li>
          <li>Product "Wireless Headphones" added</li>
          <li>Customer "Sarah Wilson" registered</li>
          <li>Invoice #INV-2024-001 marked as paid</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;