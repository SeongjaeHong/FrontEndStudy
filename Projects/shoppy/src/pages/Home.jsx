import ItemCard from '../components/ItemCard';
import './css/Home.css';
import { fetchItem } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const {
    isFetching,
    error,
    data: items,
  } = useQuery({
    queryKey: ['item'],
    queryFn: async () => await fetchItem(),
    staleTime: Infinity,
  });

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className='main-image'>
        <img src='/image/banner-image.webp' alt='main image' />
      </div>
      <section className='fixedPagination'>
        {isFetching && (
          <>
            <span className='spinner' /> 저장 중...
          </>
        )}
        {!isFetching && (
          <ul className='items'>
            {items.map((item) => (
              <li className='card' key={item.id}>
                <a href={'/product?id=' + item.id}>
                  <ItemCard item={item} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
