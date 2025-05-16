import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './css/NotFound.css';

export default function NotFound() {
  const [timeCount, setTimeCount] = useState(3);
  const timeCountRef = useRef(null);
  const navigate = useNavigate();
  const redirectHandle = () => {
    clearInterval(timeCountRef.current);
    timeCountRef.current = null;
    navigate('/');
  };

  timeCountRef.current = setInterval(() => {
    setTimeCount(timeCount - 1);
    if (timeCount === 0) {
      redirectHandle();
    }
  }, 1000);

  return (
    <div className='wrong-page'>
      <span>이런! 여기가 어디죠?</span>
      <span>다른 곳으로 가볼게요.</span>{' '}
      <span style={{ fontSize: '0.8rem' }}>({timeCount}초 후 이동합니다.)</span>
      <img src='/image/image_with_background.webp' alt='Logo image'></img>
    </div>
  );
}
