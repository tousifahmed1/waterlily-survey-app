import { api } from '@/lib/api';
import { AuthResponse, LoginData, RegisterData } from './types';

class _AuthService {
  async login(data: LoginData) {
    return api<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async register(data: RegisterData) {
    return api<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getCurrentUser() {
    return api<Pick<AuthResponse, 'user'>>('/auth/me');
  }
}

export const AuthService = new _AuthService();
