
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

// Mock user database
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
  }
];

// Stored passwords (in a real app, these would be hashed and stored in a database)
const PASSWORDS: Record<string, string> = {
  'demo@example.com': 'password123',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('auth_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email);
    const storedPassword = PASSWORDS[email];
    
    if (foundUser && storedPassword === password) {
      localStorage.setItem('auth_user', JSON.stringify(foundUser));
      setUser(foundUser);
      toast.success('Logged in successfully');
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    if (MOCK_USERS.some(u => u.email === email)) {
      toast.error('User with this email already exists');
      setIsLoading(false);
      return;
    }
    
    // Create new user
    const newUser: User = {
      id: (MOCK_USERS.length + 1).toString(),
      name,
      email,
    };
    
    // In a real app, this would be a database operation
    MOCK_USERS.push(newUser);
    PASSWORDS[email] = password;
    
    // Log user in
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setUser(newUser);
    
    toast.success('Account created successfully');
    navigate('/dashboard');
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
