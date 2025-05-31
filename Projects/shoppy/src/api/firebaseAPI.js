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
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
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

export async function fetchItem(id) {
  let itemPath = ITEM_PATH;
  if (id) {
    itemPath += `/${id}`;
  }
  const snapshot = await get(dbRef(firebaseDB, itemPath));
  if (snapshot.exists()) {
    const data = snapshot.val();
    if (id) {
      return data;
    }

    const items = Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
    }));
    return items;
  } else {
    return [];
  }
}
