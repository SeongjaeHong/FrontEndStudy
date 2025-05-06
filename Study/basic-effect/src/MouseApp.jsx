import React, { useEffect, useState } from 'react';

export default function MouseApp() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ width: '100px', height: '100px', backgroundColor: 'green' }}
      onPointerMove={(e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
