import './css/Header.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <a className='site-logo' href='/'>
        <img
          className='logo-img'
          src='/image/image_without_background.webp'
          alt='logo image'
        />
        <h1>Shoppy</h1>
      </a>
      <section className='user-functions'>
        <button className='cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className='edit-item' onClick={() => navigate('edit')}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <div className='login'>
          <button id='login-button' className='style-button'>
            로그인
          </button>
        </div>
      </section>
    </header>
  );
}
