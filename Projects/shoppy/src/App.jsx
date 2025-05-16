import { Outlet } from 'react-router';
import Header from './components/Header';
import { createContext, useContext } from 'react';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase.config';

const dbContext = createContext();
const db = getFirestore(initializeApp(firebaseConfig));

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
