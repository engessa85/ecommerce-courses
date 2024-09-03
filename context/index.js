'use client'

import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [state, setState] = useState([]);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
