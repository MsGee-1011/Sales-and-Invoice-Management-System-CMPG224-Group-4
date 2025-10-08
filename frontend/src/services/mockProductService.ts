import { Product, ProductFormData, ApiResponse } from '../types/customTypes';

// Mock products database
let mockProducts: Product[] = [
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
];

class MockProductService {
  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      data: mockProducts
    };
  }

  async createProduct(productData: ProductFormData): Promise<ApiResponse<Product>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newProduct: Product = {
      id: Math.max(...mockProducts.map(p => p.id)) + 1,
      ...productData,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    
    mockProducts.push(newProduct);
    
    return {
      success: true,
      data: newProduct
    };
  }

  async deleteProduct(id: number): Promise<ApiResponse<void>> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      mockProducts.splice(index, 1);
      return { success: true };
    }
    
    return { success: false, error: 'Product not found' };
  }
}

export const mockProductService = new MockProductService();