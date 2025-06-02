import React, { useState } from 'react';

export default function Counter({ setTotalCount }) {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const handler = async () => {
    Promise.resolve()
      .then(() => {
        console.log('Button 꾸욱');
        setCount((prev) => prev + 1);
        setTotalCount((prev) => prev + 1);
        setError(true);
      })
      .catch((error) => {
        console.log('promise 에러 펑');
        throw error;
      });
  };
  if (error) {
    throw Error('사용자 에러 펑');
  }
  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button className='button' onClick={handler}>
        Add +
      </button>
    </div>
  );
}
