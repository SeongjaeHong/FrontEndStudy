import './css/Header.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header() {
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
        <div className='cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className='login'>
          <button>Login</button>
        </div>
      </section>
    </header>
  );
}
