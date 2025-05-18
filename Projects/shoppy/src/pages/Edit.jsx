import { useRef, useState } from 'react';
import './css/Edit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

export default function Edit() {
  const mockItemList = [
    ['바지', '새바지', '남성', 12300],
    ['장갑', '벙어리 장갑', '여성', 9380],
  ];
  const checkboxCount = mockItemList.length; // TODO: 한 개 페이지에서 보여줄 아이템 항목 갯수로 사용 (사용자 변경 가능 옵션). 실제 DB 조회 개수 할당
  const [checkedBoxes, setCheckedBoxes] = useState(
    new Array(checkboxCount).fill(false)
  );
  const checkboxChangeHandle = (index) => {
    const updatedBoxes = [...checkedBoxes];
    updatedBoxes[index] = !updatedBoxes[index];
    setCheckedBoxes(updatedBoxes);
  };
  const isAnyChecked = checkedBoxes.some(Boolean);

  const tooltipHoverRef = useRef();
  const tooltieHoverTimeCountRef = useRef();
  const tooltipEnterHandle = (e) => {
    const target = e.currentTarget.dataset.tooltip;
    tooltipHoverRef.current = target;
    tooltieHoverTimeCountRef.current = () => {
      setTimeout(() => {}, 1000);
    };
  };

  const tooltipLeaveHandle = (e) => {
    e.currentTarget.dataset.tooltip;
  };

  return (
    <section className='column-edit'>
      <section className='item-funcs'>
        <div
          className='item-func hover-cicle'
          hidden={!isAnyChecked}
          data-tooltip='Delete'
          onMouseEnter={tooltipEnterHandle}
          onMouseLeave={tooltipLeaveHandle}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </section>
      <table className='item-list'>
        <thead>
          <tr className='tab'>
            <th></th>
            <th className='index'>번호</th>
            <th className='category'>카테고리</th>
            <th className='name'>상품명</th>
            <th className='sex'>성별</th>
            <th className='price'>가격</th>
          </tr>
        </thead>
        <tbody>
          {mockItemList.map((mockItem, index) => (
            <tr className='item' key={index}>
              <td className='checkbox'>
                <div className='hover-cicle'>
                  <input
                    type='checkbox'
                    onChange={() => checkboxChangeHandle(index)}
                  />
                </div>
              </td>
              <td className='index'>{index + 1}</td>
              <td className='category'>{mockItem[0]}</td>
              <td className='name'>{mockItem[1]}</td>
              <td className='sex'>{mockItem[2]}</td>
              <td className='price'>{mockItem[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
