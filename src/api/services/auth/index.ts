import { apiConfig } from '../..';
import { LoginCredentials } from '../../../utils/interfaces';

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    return await apiConfig.post('/auth/login', credentials);
  },
  
  register: async (userData: any) => {
    return await apiConfig.post('/auth/register', userData);
  },
  
  getProfile: async (token: string) => {
    return await apiConfig.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
  },
}