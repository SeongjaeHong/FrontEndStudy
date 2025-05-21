import { createContext, useContext } from 'react';
import { firebaseDB } from '../api/firebaseAPI';

const dbContext = createContext();

export default function DBProvider({ children }) {
  return <dbContext.Provider value={firebaseDB}>{children}</dbContext.Provider>;
}

export function useDB() {
  const context = useContext(dbContext);
  if (context === undefined) {
    throw new Error('useDB must be used within a dbContext.Provider');
  }
  return context;
}
