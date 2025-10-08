import { User, LoginFormData, ApiResponse } from '../types/customTypes';

export interface AuthResponse {
  user: User;
  token: string;
}

// Mock user database
const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
    role: 'admin' as const
  },
  {
    id: 2,
    username: 'manager',
    password: 'manager123',
    email: 'manager@example.com',
    role: 'manager' as const
  },
  {
    id: 3,
    username: 'user',
    password: 'user123',
    email: 'user@example.com',
    role: 'user' as const
  }
];

class MockAuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  async login(credentials: LoginFormData): Promise<ApiResponse<AuthResponse>> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = mockUsers.find(
      u => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      const { password, ...userWithoutPassword } = user;
      const token = `mock-jwt-token-${user.id}`;
      
      this.setToken(token);
      
      return {
        success: true,
        data: {
          user: userWithoutPassword,
          token: token
        }
      };
    } else {
      return {
        success: false,
        error: 'Invalid username or password'
      };
    }
  }

  async logout(): Promise<ApiResponse<void>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.clearToken();
    return { success: true };
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const token = this.getToken();
    if (!token) {
      return { success: false, error: 'Not authenticated' };
    }

    // Extract user ID from mock token
    const userId = parseInt(token.replace('mock-jwt-token-', ''));
    const user = mockUsers.find(u => u.id === userId);
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return {
        success: true,
        data: userWithoutPassword
      };
    }

    return { success: false, error: 'User not found' };
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const mockAuthService = new MockAuthService();