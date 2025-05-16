import { collection, getDocs } from 'firebase/firestore/lite';
import { useDB } from '../App';
import ItemCard from '../components/ItemCard';
import './css/Home.css';

export default function Home() {
  const db = useDB();
  return (
    <>
      <div className='main-image'>
        <img src='/image/main_image_wide.webp' alt='main image' />
      </div>
      <section className='items'>
        {/* <ItemCard></ItemCard> */}
        {/* getItems(db); */}
        <span>테스트 텍스트</span>
      </section>
    </>
  );
}

async function getItems(db) {
  const itemsCol = collection(db, 'items');
  const itemSnapshot = await getDocs(itemsCol);
  const itemList = itemSnapshot.docs.map((doc) => doc.data());
  return itemList;
}
