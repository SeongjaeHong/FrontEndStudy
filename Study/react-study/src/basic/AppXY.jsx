import React, { useState } from 'react';
import '../css/AppXY.css'

export default function AppXY() {
    const [coord, setCoord] = useState({x:0, y:0});
    const handleMouseMove = (e) => {
        setCoord({x: e.clientX, y: e.clientY});
    };

    return (
        <div className='container' onMouseMove={handleMouseMove}>
            <div className='pointer' style={
                {
                    left: `${coord.x}px`,
                    top: `${coord.y}px`
                }
            }>
            </div>
        </div>
    );
}

