import { get, getDatabase, push, ref, remove, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytes } from 'firebase/storage';

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
const app = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(app);
export const firebaseStorage = getStorage(app);

const ITEM_PATH = 'items';
const IMAGE_PATH = 'images';

export async function saveItem(formData) {
  const item = {
    createdAt: Date.now(),
  };

  for (const key of Object.keys(formData)) {
    if (key !== 'image') {
      item[key] = formData[key];
    }
  }

  // if (formData.image) {
  //   const imageRef = ref(firebaseStorage, IMAGE_PATH);
  //   await uploadBytes(imageRef, formData.image);
  // }

  const itemRef = ref(firebaseDB, ITEM_PATH);
  await push(itemRef, item);
}

export async function removeItem(removeIds) {
  removeIds.map(() => async (id) => {
    await remove(ref(firebaseDB, '/items/' + id));
  });

  const removePaths = {};
  removeIds.map((id) => {
    removePaths['items/' + id] = null;
  });
  update(ref(firebaseDB), removePaths);
}

export async function fetchItem() {
  const snapshot = await get(ref(firebaseDB, ITEM_PATH));
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
