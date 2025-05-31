import './css/ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <>
      <div className='thumbnail'>
        <img src={`/image/${item.image}`} />
      </div>
      <div className='item-info'>
        <p className='name'>{item.name}</p>
        <p className='price'>
          {item.price}
          {'원 '}
          <del style={{ color: 'gray' }}>{item.price * 1.8}원</del>
        </p>
        <p className='sex'>{item.sex}</p>
      </div>
    </>
  );
}
