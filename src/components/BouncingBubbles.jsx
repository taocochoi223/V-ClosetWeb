import React, { useEffect, useRef, useMemo } from 'react';

const BUBBLE_COUNT = 15;

const BouncingBubbles = () => {
  const containerRef = useRef(null);
  
  // Initialize static bubble configs once
  const initialBubbles = useMemo(() => {
    return Array.from({ length: BUBBLE_COUNT }).map(() => ({
      size: Math.random() * 40 + 20, // 20px - 60px
      x: 0, 
      y: 0,
      vx: (Math.random() - 0.5) * 3, // speed x
      vy: (Math.random() - 0.5) * 3, // speed y
      element: null,
    }));
  }, []);
  
  const bubblesRef = useRef(initialBubbles);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Set random initial positions based on container size
    bubblesRef.current.forEach(bubble => {
       bubble.x = Math.random() * (container.clientWidth - bubble.size);
       bubble.y = Math.random() * (container.clientHeight - bubble.size);
       // Ensure they don't get stuck with 0 velocity
       if (Math.abs(bubble.vx) < 0.5) bubble.vx = 1;
       if (Math.abs(bubble.vy) < 0.5) bubble.vy = 1;
    });

    let animationFrameId;

    const render = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      bubblesRef.current.forEach(bubble => {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        // Bounce mechanics (horizontal)
        if (bubble.x <= 0) {
          bubble.x = 0;
          bubble.vx *= -1;
        } else if (bubble.x + bubble.size >= width) {
          bubble.x = width - bubble.size;
          bubble.vx *= -1;
        }

        // Bounce mechanics (vertical)
        if (bubble.y <= 0) {
          bubble.y = 0;
          bubble.vy *= -1;
        } else if (bubble.y + bubble.size >= height) {
          bubble.y = height - bubble.size;
          bubble.vy *= -1;
        }

        if (bubble.element) {
          bubble.element.style.transform = `translate3d(${bubble.x}px, ${bubble.y}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Handle window resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      bubblesRef.current.forEach(b => {
        if (b.x + b.size > w) b.x = w - b.size;
        if (b.y + b.size > h) b.y = h - b.size;
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {bubblesRef.current.map((bubble, i) => (
        <div
          key={i}
          ref={(el) => (bubble.element = el)}
          className="soap-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: 0,
            left: 0,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBubbles;
