import React from 'react';
import './css/Edit.css';

export default function Edit() {
  return (
    <section className='item-list'>
      <div className='tab'>
        <span className='col-span-2'>
          <input type='checkbox' />
        </span>
        <span className='col-span-4'>번호</span>
        <span className='col-span-10'>카테고리</span>
        <span className='col-span-70'>상품명</span>
        <span className='col-span-4'>성별</span>
        <span className='col-span-10'>가격</span>
      </div>
      <div className='item'>
        <span className='col-span-2'>
          <input type='checkbox' />
        </span>
        <span className='col-span-4'>1</span>
        <span className='col-span-10'>바지</span>
        <span className='col-span-70'>새바지</span>
        <span className='col-span-4'>남성</span>
        <span className='col-span-10'>12300</span>
      </div>
      <div className='item'>
        <span className='col-span-2'>
          <input type='checkbox' />
        </span>
        <span className='col-span-4'>2</span>
        <span className='col-span-10'>장갑</span>
        <span className='col-span-70'>벙어리 장갑</span>
        <span className='col-span-4'>여성</span>
        <span className='col-span-10'>9380</span>
      </div>
    </section>
  );
}
