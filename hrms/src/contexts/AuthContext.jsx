import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const DEFAULT_EMAIL = 'admin@example.com';
const DEFAULT_PASSWORD = 'password123';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or making an API call)
    const checkLoggedIn = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      const dummyUser = { id: 1, name: 'Admin User', email };
      setUser(dummyUser);
      localStorage.setItem('user', JSON.stringify(dummyUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
