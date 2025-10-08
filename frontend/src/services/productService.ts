import { apiService } from './api';
import { Product, ProductFormData, ApiResponse, PaginatedResponse } from '../types/customTypes';

class ProductService {
  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>('/products');
  }

  async getProductById(id: number): Promise<ApiResponse<Product>> {
    return apiService.get<Product>(`/products/${id}`);
  }

  async createProduct(productData: ProductFormData): Promise<ApiResponse<Product>> {
    return apiService.post<Product>('/products', productData);
  }

  async updateProduct(id: number, productData: Partial<ProductFormData>): Promise<ApiResponse<Product>> {
    return apiService.put<Product>(`/products/${id}`, productData);
  }

  async deleteProduct(id: number): Promise<ApiResponse<void>> {
    return apiService.delete<void>(`/products/${id}`);
  }

  async searchProducts(query: string): Promise<ApiResponse<Product[]>> {
    return apiService.get<Product[]>(`/products/search?q=${encodeURIComponent(query)}`);
  }
}

export const productService = new ProductService();