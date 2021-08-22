import React, { useState, useEffect, useRef } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min';

export default function Background({ children, height = '100vh' }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 20.0,
          minWidth: 200.0,
          scale: 1.0,
          color2: 0x2b2869,
          size: 1.7,
          speed: 1.8,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        minHeight: height,
        backgroundColor: '#1f4063',
      }}
    >
      {children}
    </div>
  );
}
