import {
  get,
  getDatabase,
  push,
  ref as dbRef,
  remove,
  update,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBAaI3cnyt2xWB_yh34Frt2JC3B8Q2ROXY',
  authDomain: 'shoppy-e822e.firebaseapp.com',
  databaseURL:
    'https://shoppy-e822e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-e822e',
  storageBucket: 'shoppy-e822e.firebasestorage.app',
  messagingSenderId: '160873879655',
  appId: '1:160873879655:web:156664c6855a5e41fe9cc2',
  measurementId: 'G-ZFL94KV6C8',
};
const app = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(app);

const ITEM_PATH = 'items';

export async function saveItem(formData) {
  const item = {
    ...formData,
    createdAt: Date.now(),
  };

  const itemRef = dbRef(firebaseDB, ITEM_PATH);
  await push(itemRef, item);
}

export async function removeItem(removeIds) {
  removeIds.map(() => async (id) => {
    await remove(dbRef(firebaseDB, '/items/' + id));
  });

  const removePaths = {};
  removeIds.map((id) => {
    removePaths['items/' + id] = null;
  });
  update(dbRef(firebaseDB), removePaths);
}

export async function fetchItem() {
  const snapshot = await get(dbRef(firebaseDB, ITEM_PATH));
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
