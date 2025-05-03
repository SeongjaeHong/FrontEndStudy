import React, { useState } from 'react';

export default function Counter({ setTotalCount }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          setTotalCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
