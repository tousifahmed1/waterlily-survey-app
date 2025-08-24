'use client';
import { LoginData, RegisterData, User } from '@/repositories/auth';
import React from 'react';

type AuthContextType = {
  user: User | null;
  logout: () => void;
  isLoading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  logout: () => {},
  isLoading: false,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
});
