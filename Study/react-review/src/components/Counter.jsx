import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  console.log('Top');
  const handler1 = () => {
    console.log('log #1');
    setTimeout(() => {
      console.log('log #2');
    }, 0);
    queueMicrotask(() => {
      console.log('log #3');
    });
    // setError(true);
    console.log('log #4');
  };
  console.log('Bottom');

  const handler2 = () => {
    console.log('log #1');
    setCount((prev) => prev + 1);
    setTimeout(() => {
      console.log('log #2');
    }, 0);
    queueMicrotask(() => {
      console.log('log #3');
    });
    setError(true);
    console.log('log #4');
  };

  if (error) {
    throw Error('사용자 에러');
  }

  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button className='button' onClick={handler1}>
        Button1
      </button>
      <button className='button' onClick={handler2}>
        Button2
      </button>
    </div>
  );
}
