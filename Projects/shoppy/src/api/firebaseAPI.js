import { push, ref } from 'firebase/database';

export async function saveItem(request) {
  const formData = await request.formData;
  const db = await request.db;

  const item = {
    ...formData,
    createdAt: Date.now(),
  };

  const itemRef = ref(db, 'items');
  await push(itemRef, item);
}
