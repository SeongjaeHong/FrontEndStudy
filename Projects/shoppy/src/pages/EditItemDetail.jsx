import { useState } from 'react';
import './css/EditItemDetail.css';

export default function EditItemDetail() {
  const [uploadedFileName, setUploadedFileName] = useState('');
  const fileChangeHandle = (e) => {
    const el = e.currentTarget;
    if (el.files.length) {
      setUploadedFileName(el.files[0].name);
    }
  };
  return (
    <form className='edit-form'>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='name'>상품명</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input id='name' placeholder='상품명' />
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='category'>카테고리</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input id='category' placeholder='카테고리' />
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='price'>가격</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input type='number' id='price' placeholder='가격' />{' '}
          {/* 가격 검증 로직 추가 */}
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='input-image'>파일첨부</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input
            type='file'
            className='input-image'
            id='input-image'
            accept='image/*'
            onChange={fileChangeHandle}
          ></input>
          <input
            id='uploaded-image-text'
            placeholder='첨부파일'
            value={uploadedFileName}
            readOnly
          />
        </div>
      </div>
      <button id='submit-button' className='style-button'>
        확인
      </button>
    </form>
  );
}
