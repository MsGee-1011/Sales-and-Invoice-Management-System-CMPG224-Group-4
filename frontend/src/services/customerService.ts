import { apiService } from './api';
import { Customer, CustomerFormData, ApiResponse } from '../types/customTypes';

class CustomerService {
  async getAllCustomers(): Promise<ApiResponse<Customer[]>> {
    return apiService.get<Customer[]>('/customers');
  }

  async getCustomerById(id: number): Promise<ApiResponse<Customer>> {
    return apiService.get<Customer>(`/customers/${id}`);
  }

  async createCustomer(customerData: CustomerFormData): Promise<ApiResponse<Customer>> {
    return apiService.post<Customer>('/customers', customerData);
  }

  async updateCustomer(id: number, customerData: Partial<CustomerFormData>): Promise<ApiResponse<Customer>> {
    return apiService.put<Customer>(`/customers/${id}`, customerData);
  }

  async deleteCustomer(id: number): Promise<ApiResponse<void>> {
    return apiService.delete<void>(`/customers/${id}`);
  }
}

export const customerService = new CustomerService();