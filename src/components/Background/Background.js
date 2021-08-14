import React, { useState, useEffect, useRef } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min';

export default function Background({ children }) {
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
          minHeight: 200.0,
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

  const styles = {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // width: '100vw',
    minHeight: '100vh',
  };

  return (
    <div ref={myRef} style={styles}>
      <div>{children}</div>
    </div>
  );
}
