import React, { useState } from 'react';
import { Product } from '../types/customTypes';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { 
      id: 1, 
      name: 'Laptop', 
      price: 999.99, 
      quantity: 10, 
      description: 'High-performance laptop',
      category: 'Electronics',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    { 
      id: 2, 
      name: 'Wireless Mouse', 
      price: 25.50, 
      quantity: 50, 
      description: 'Ergonomic wireless mouse',
      category: 'Electronics',
      createdAt: '2024-01-02',
      updatedAt: '2024-01-02'
    },
    { 
      id: 3, 
      name: 'Mechanical Keyboard', 
      price: 75.00, 
      quantity: 30, 
      description: 'RGB mechanical keyboard',
      category: 'Electronics',
      createdAt: '2024-01-03',
      updatedAt: '2024-01-03'
    }
  ]);

  const deleteProduct = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;