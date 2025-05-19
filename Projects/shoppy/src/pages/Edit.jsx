import { useRef, useState } from 'react';
import './css/Edit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { useDB } from '../App';
import { ref, remove, set } from 'firebase/database';
import { useNavigate } from 'react-router';

export default function Edit() {
  const navigate = useNavigate();
  const mockItemList = [
    ['바지', '새바지', '남성', 12300],
    ['장갑', '벙어리 장갑', '여성', 9380],
  ];
  const checkboxCount = mockItemList.length; // TODO: 한 개 페이지에서 보여줄 아이템 항목 갯수로 사용 (사용자 변경 가능 옵션). 실제 DB 조회 개수 할당
  const [checkedBoxes, setCheckedBoxes] = useState(
    new Array(checkboxCount).fill(false)
  );
  const displayItemFuncHandle = (index) => {
    const updatedBoxes = [...checkedBoxes];
    updatedBoxes[index] = !updatedBoxes[index];
    setCheckedBoxes(updatedBoxes);
  };

  const itemClickHandle = (e) => {
    const target = e.target.closest('.item');
    if (!target?.classList.contains('clicked')) {
      target.classList.add('clicked');
    } else {
      target.classList.remove('clicked');
    }
  };

  const checkboxChangeHandle = (e, index) => {
    displayItemFuncHandle(index);
    itemClickHandle(e);
  };
  const isAnyChecked = checkedBoxes.some(Boolean);

  let tooltipEl = null;
  const tooltipHoverTimeCountRef = useRef();
  const tooltipEnterHandle = (e) => {
    const target = e.currentTarget;
    tooltipHoverTimeCountRef.current = setTimeout(() => {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.innerText = target.dataset.tooltip;
      const coords = target.getBoundingClientRect();
      const left = coords.left;
      const top = coords.bottom + 5;
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.left = `${left}px`;
      tooltipEl.style.top = `${top}px`;
      document.body.append(tooltipEl);
    }, 200);
  };

  const tooltipLeaveHandle = () => {
    if (tooltipHoverTimeCountRef.current) {
      clearTimeout(tooltipHoverTimeCountRef.current);
      tooltipHoverTimeCountRef.current = null;
    }
    if (tooltipEl) {
      tooltipEl.remove();
      tooltipEl = null;
    }
  };

  const db = useDB();
  // const addItemHandle = () => {
  //   set(ref(db, '/items/2'), item);
  // };
  const removeItemHandle = () => {
    checkedBoxes.map((isChecked, index) => {
      if (!isChecked) return;
      remove(ref(db, '/items/' + (index + 1)));
    });
  };

  return (
    <section className='column-edit'>
      <section className='item-funcs'>
        <section className='left-side'>
          <div
            className='item-func hover-cicle'
            hidden={!isAnyChecked}
            data-tooltip='Delete'
            onMouseEnter={tooltipEnterHandle}
            onMouseLeave={tooltipLeaveHandle}
            onClick={removeItemHandle}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </section>
        <section className='right-side'>
          <button id='add-item' onClick={() => navigate('/detail')}>
            추가
          </button>
        </section>
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
                    onChange={(e) => checkboxChangeHandle(e, index)}
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
