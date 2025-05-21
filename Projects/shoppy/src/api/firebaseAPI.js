import { get, push, ref, remove, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBAaI3cnyt2xWB_yh34Frt2JC3B8Q2ROXY',
  authDomain: 'shoppy-e822e.firebaseapp.com',
  databaseURL:
    'https://shoppy-e822e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-e822e',
  storageBucket: 'shoppy-e822e.firebasestorage.app',
  messagingSenderId: '160873879655',
  appId: '1:160873879655:web:54440e3e8cfce779fe9cc2',
  measurementId: 'G-R9RRX5S9HX',
};
export const firebaseDB = getDatabase(initializeApp(firebaseConfig));

const ITEM_PATH = 'items';
export async function saveItem(request) {
  const formData = request.formData;
  const db = request.db;

  const item = {
    ...formData,
    createdAt: Date.now(),
  };

  const itemRef = ref(db, ITEM_PATH);
  await push(itemRef, item);
}

export async function removeItem(request) {
  const removeIds = request.removeIds;
  const db = request.db;

  removeIds.map(() => async (id) => {
    await remove(ref(db, '/items/' + id));
  });

  const removePaths = {};
  removeIds.map((id) => {
    removePaths['items/' + id] = null;
  });
  update(ref(db), removePaths);
}

export async function fetchItem(db) {
  const snapshot = await get(ref(db, ITEM_PATH));
  if (snapshot.exists()) {
    const data = snapshot.val();
    const items = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return items;
  } else {
    return [];
  }
}
