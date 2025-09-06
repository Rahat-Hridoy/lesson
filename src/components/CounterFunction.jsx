import { useEffect, useRef, useState } from "react";

const ScrollCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const targetCount = target; // Final number
  const intervalTime = 30; // Speed (ms)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter(); // Start each time it's visible
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    let currentCount = 0;
    setCount(0); // reset each time visible

    const counter = setInterval(() => {
      currentCount++;
      setCount(currentCount);

      if (currentCount >= targetCount) {
        clearInterval(counter);
      }
    }, intervalTime);
  };

  return (
    <span ref={counterRef} className="inline-block">
      {count}
    </span>
  );
};

export default ScrollCounter;
