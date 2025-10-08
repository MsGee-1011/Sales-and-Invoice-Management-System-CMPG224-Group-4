import { apiService } from './api';
import { Sale, SalesReport, ApiResponse, PaginatedResponse } from '../types/customTypes';

export interface CreateSaleRequest {
  customerId: number;
  items: Array<{
    productId: number;
    quantity: number;
    unitPrice: number;
  }>;
}

class SalesService {
  async getAllSales(): Promise<ApiResponse<Sale[]>> {
    return apiService.get<Sale[]>('/sales');
  }

  async getSaleById(id: number): Promise<ApiResponse<Sale>> {
    return apiService.get<Sale>(`/sales/${id}`);
  }

  async createSale(saleData: CreateSaleRequest): Promise<ApiResponse<Sale>> {
    return apiService.post<Sale>('/sales', saleData);
  }

  async getSalesReport(startDate: string, endDate: string): Promise<ApiResponse<SalesReport>> {
    return apiService.get<SalesReport>(`/sales/report?startDate=${startDate}&endDate=${endDate}`);
  }

  async getRecentSales(limit: number = 10): Promise<ApiResponse<Sale[]>> {
    return apiService.get<Sale[]>(`/sales/recent?limit=${limit}`);
  }
}

export const salesService = new SalesService();