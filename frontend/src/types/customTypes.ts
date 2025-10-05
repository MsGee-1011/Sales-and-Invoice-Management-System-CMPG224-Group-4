// Core type definitions for the Sales and Invoice Management System

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  company?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Sale {
  id: number;
  customerId: number;
  customerName: string;
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
  saleDate: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Invoice {
  id: number;
  saleId: number;
  customerId: number;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  issueDate: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  items: InvoiceItem[];
}

export interface InvoiceItem {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface SalesReport {
  period: string;
  totalSales: number;
  totalRevenue: number;
  totalCustomers: number;
  topProducts: Product[];
  salesData: Sale[];
}

// Form Data Types
export interface LoginFormData {
  username: string;
  password: string;
}

export interface ProductFormData {
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
}

export interface CustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: Address;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}