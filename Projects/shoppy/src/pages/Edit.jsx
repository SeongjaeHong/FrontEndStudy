import { useState } from 'react';
import './css/Edit.css';

export default function Edit() {
  const checkboxCount = 2; // TODO: 한 개 페이지에서 보여줄 아이템 항목 갯수로 사용 (가변)
  const [checkedBoxes, setCheckedBoxes] = useState(
    new Array(checkboxCount).fill(false)
  );
  const checkboxChangeHandle = (index) => {
    const updatedBoxes = [...checkedBoxes];
    updatedBoxes[index] = !updatedBoxes[index];
    setCheckedBoxes(updatedBoxes);
  };

  const mockItemList = [
    ['바지', '새바지', '남성', 12300],
    ['장갑', '벙어리 장갑', '여성', 9380],
  ];

  const isAnyChecked = checkedBoxes.some(Boolean);

  return (
    <>
      <span>Check?:{isAnyChecked ? 'true' : 'false'}</span>
      <section className='item-list'>
        <div className='tab'>
          <span className='col-span-2'></span>
          <span className='col-span-4'>번호</span>
          <span className='col-span-10'>카테고리</span>
          <span className='col-span-70'>상품명</span>
          <span className='col-span-4'>성별</span>
          <span className='col-span-10'>가격</span>
        </div>
        {mockItemList.map((mockItem, index) => (
          <div className='item' key={index}>
            <span className='col-span-2'>
              <input
                type='checkbox'
                className='checkbox'
                onClick={() => checkboxChangeHandle(index)}
              />
            </span>
            <span className='col-span-4'>{index + 1}</span>
            <span className='col-span-10'>{mockItem[0]}</span>
            <span className='col-span-70'>{mockItem[1]}</span>
            <span className='col-span-4'>{mockItem[2]}</span>
            <span className='col-span-10'>{mockItem[3]}</span>
          </div>
        ))}
      </section>
    </>
  );
}
