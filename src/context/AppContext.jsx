import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppStateProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// NOTE: no throw — return null if used outside provider; callers must guard.
export function useAppState() {
  return useContext(AppContext);
}