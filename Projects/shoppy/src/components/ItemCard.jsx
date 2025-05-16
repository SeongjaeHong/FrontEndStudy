import React from 'react';

export default function ItemCard() {
  return (
    <div className='card'>
      <div className='thumbnail'></div>
      <div className='item-info'>
        <span className='name'>아무 12345123455 이름</span>
        <span className='price'>\12345</span>
        <span className='sex'>남성</span>
      </div>
    </div>
  );
}
