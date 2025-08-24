'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthContext } from './context';
import {
  AuthService,
  LoginData,
  RegisterData,
  User,
} from '@/repositories/auth';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(async (data: LoginData) => {
    try {
      const res = await AuthService.login(data);

      localStorage.setItem('authToken', res.responseObject.token);
      setUser(res.responseObject.user);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed.');
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    try {
      const res = await AuthService.register(data);

      localStorage.setItem('authToken', res.responseObject.token);
      setUser(res.responseObject.user);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Registration failed.'
      );
    }
  }, []);

  const checkAuthStatus = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const res = await AuthService.getCurrentUser();
      setUser(res.responseObject.user);
    } catch (error) {
      localStorage.removeItem('authToken');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUser(null);
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const value = useMemo(
    () => ({ user, isLoading, login, register, logout }),
    [user, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
