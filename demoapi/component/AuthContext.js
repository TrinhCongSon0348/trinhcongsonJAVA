// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (username, password) => {
    try {
      const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/register', {
        username,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Lỗi khi đăng ký', error);
      throw error;
    }
  };

  const signIn = async (username, password) => {
    try {
      const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/login', {
        username,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error('Lỗi khi đăng nhập', error);
      throw error;
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
