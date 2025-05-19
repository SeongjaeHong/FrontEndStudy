import { get, push, ref, remove, update } from 'firebase/database';

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
