import { Outlet } from 'react-router';
import Header from './components/Header';
import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase.config';
import { getDatabase } from '@firebase/database';

const dbContext = createContext();
const db = getDatabase(initializeApp(firebaseConfig));

export default function App() {
  return (
    <dbContext.Provider value={db}>
      <Header />
      <Outlet />
    </dbContext.Provider>
  );
}

export function useDB() {
  return useContext(dbContext);
}
