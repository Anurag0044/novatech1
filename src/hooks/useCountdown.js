import { useState, useEffect } from 'react';

/**
 * A custom hook to calculate time remaining until a target date.
 */
const useCountdown = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetTime - new Date().getTime());
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(timer);
  }, [targetTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const completed = timeLeft <= 0;

  return { days, hours, minutes, seconds, completed };
};

export default useCountdown;
