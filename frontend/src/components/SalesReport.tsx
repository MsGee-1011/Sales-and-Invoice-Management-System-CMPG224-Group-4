import React from 'react';
import { Sale } from '../types/customTypes';

const SalesReport: React.FC = () => {
  const salesData: Sale[] = [
    { 
      id: 1, 
      customerId: 1, 
      customerName: 'John Doe',
      productId: 1, 
      productName: 'Laptop', 
      quantity: 2, 
      unitPrice: 999.99, 
      total: 1999.98, 
      saleDate: '2024-01-15',
      status: 'completed'
    },
    { 
      id: 2, 
      customerId: 2, 
      customerName: 'Jane Smith',
      productId: 2, 
      productName: 'Wireless Mouse', 
      quantity: 5, 
      unitPrice: 25.50, 
      total: 127.50, 
      saleDate: '2024-01-15',
      status: 'completed'
    },
    { 
      id: 3, 
      customerId: 3, 
      customerName: 'Bob Johnson',
      productId: 3, 
      productName: 'Mechanical Keyboard', 
      quantity: 3, 
      unitPrice: 75.00, 
      total: 225.00, 
      saleDate: '2024-01-14',
      status: 'completed'
    }
  ];

  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.total, 0);
  const totalItemsSold = salesData.reduce((sum, sale) => sum + sale.quantity, 0);

  return (
    <div className="sales-report">
      <h3>Sales Report</h3>
      
      <div className="summary">
        <h4>Sales Summary</h4>
        <div className="stats-grid">
          <div className="stat-card">
            <h5>Total Sales</h5>
            <p>{salesData.length}</p>
          </div>
          <div className="stat-card">
            <h5>Total Revenue</h5>
            <p>${totalRevenue.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h5>Items Sold</h5>
            <p>{totalItemsSold}</p>
          </div>
          <div className="stat-card">
            <h5>Average Sale</h5>
            <p>${(totalRevenue / salesData.length).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="sales-table">
        <h4>Recent Sales</h4>
        <table>
          <thead>
            <tr>
              <th>Sale ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map(sale => (
              <tr key={sale.id}>
                <td>#{sale.id}</td>
                <td>{sale.customerName}</td>
                <td>{sale.productName}</td>
                <td>{sale.quantity}</td>
                <td>${sale.unitPrice.toFixed(2)}</td>
                <td>{sale.saleDate}</td>
                <td>${sale.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge status-${sale.status}`}>
                    {sale.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;