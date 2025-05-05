import React, { useEffect, useState } from 'react';

export default function MouseApp() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      style={{ width: '100px', height: '100px', backgroundColor: 'green' }}
      onPointerMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${x}px, ${y}px)` }}
      ></div>
    </div>
  );
}
