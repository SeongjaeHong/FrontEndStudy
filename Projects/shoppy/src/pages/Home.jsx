import ItemCard from '../components/ItemCard';
import './css/Home.css';
import { useDB } from '../contexts/DBProvider';

export default function Home() {
  const db = useDB();
  return (
    <>
      <div className='main-image'>
        <img src='/image/banner-image.webp' alt='main image' />
      </div>
      <section className='items'>
        {/* <ItemCard></ItemCard> */}
        {/* getItems(db); */}
        <span>테스트 텍스트</span>
      </section>
    </>
  );
}
