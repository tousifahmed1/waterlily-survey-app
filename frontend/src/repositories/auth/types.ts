export type User = {
  id: string;
  name: string;
  email: string;
};

export type RegisterData = Omit<User, 'id'> & {
  password: string;
};

export type LoginData = Omit<RegisterData, 'name'>;

export type AuthResponse = {
  token: string;
  user: User;
};
