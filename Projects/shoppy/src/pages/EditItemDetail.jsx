import { useEffect, useRef, useState } from 'react';
import './css/EditItemDetail.css';
import { saveItem } from '../api/firebaseAPI';
import { useNavigate } from 'react-router';

const FORM_KEY = 'item-in-edit';

export default function EditItemDetail() {
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    sex: '남성',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(FORM_KEY);
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const autoSaveTimeCountRef = useRef(null);

  const fileChangeHandle = (e) => {
    const el = e.currentTarget;
    if (el.files.length) {
      setUploadedFileName(el.files[0].name);
      setFormData((prev) => ({ ...prev, image: el.files[0] }));
    }
  };

  const changeHandle = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
    autoSaveHandle();
  };

  const autoSaveHandle = () => {
    if (autoSaveTimeCountRef.current) {
      clearTimeout(autoSaveTimeCountRef.current);
    }
    autoSaveTimeCountRef.current = setTimeout(() => {
      sessionStorage.setItem(FORM_KEY, JSON.stringify(formData));
      autoSaveTimeCountRef.current = null;
    }, 3 * 1000);
  };

  const navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (autoSaveTimeCountRef.current) {
      clearTimeout(autoSaveTimeCountRef.current);
      autoSaveTimeCountRef.current = null;
    }

    try {
      await saveItem(formData);
      sessionStorage.removeItem(FORM_KEY);
      navigate('/edit');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className='edit-form' method='post' onSubmit={submitHandle}>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='name'>상품명</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input
            id='name'
            name='name'
            placeholder='상품명'
            onChange={changeHandle}
            value={formData.name}
            required={true}
            autoComplete='off'
          />
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='category'>카테고리</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input
            id='category'
            name='category'
            placeholder='카테고리'
            onChange={changeHandle}
            value={formData.category}
            required={true}
            autoComplete='off'
          />
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='sex'>성별</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <select
            id='sex'
            name='sex'
            onChange={changeHandle}
            value={formData.sex}
          >
            <option value='남성'>남성</option>
            <option value='여성'>여성</option>
            <option value='중성'>중성</option>
          </select>
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label htmlFor='price'>가격</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input
            type='number'
            id='price'
            name='price'
            placeholder='가격'
            onChange={changeHandle}
            value={formData.price}
            required={true}
          />
        </div>
      </div>
      <div className='style-eidt-row'>
        <div className='style-edit-column-title'>
          <label>파일첨부</label>
        </div>
        <span className='bar'>|</span>
        <div className='style-edit-column-content'>
          <input
            type='file'
            className='input-image'
            id='input-image'
            name='input-image'
            accept='image/*'
            onChange={fileChangeHandle}
          ></input>
          <input
            id='uploaded-image-text'
            placeholder='첨부파일 기능은 비활성화 상태입니다.'
            value={uploadedFileName}
            readOnly
          />
        </div>
      </div>
      <button
        id='submit-button'
        className='style-button'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className='spinner' /> 저장 중...
          </>
        ) : (
          '확인'
        )}
      </button>
    </form>
  );
}
