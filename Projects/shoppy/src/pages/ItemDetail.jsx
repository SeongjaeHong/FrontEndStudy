import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { fetchItem } from '../api/firebaseAPI';
import './css/ItemDetail.css';

export default function ItemDetail() {
  const [searchPararms] = useSearchParams();
  const itemId = searchPararms.get('id');
  const { isFetching, data: item } = useQuery({
    queryKey: [itemId],
    queryFn: async () => fetchItem(itemId),
    staleTime: Infinity,
  });
  console.dir(item);
  return (
    <>
      {isFetching && <p>로딩 중...</p>}
      {!isFetching && (
        <section className='content-detail'>
          <section className='img-col'>
            <img src={'/image/' + item.image} alt='제품 사진' />
          </section>
          <section className='info-col'>
            <p className='title'>
              <h1 className='product-title'>{item.name}</h1>
              <p className='sex'>{item.sex}</p>
            </p>
            <p className='price'>{item.price}원</p>
            <div className='product-buy'>
              <button className='product-cart-btn'>장바구니 담기</button>
              <button className='product-buy-btn'>바로구매</button>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
