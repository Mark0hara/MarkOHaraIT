import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, index + 1));
          index++;
          startTyping();
        }, speed);
      } else {
        setIsComplete(true);
      }
    };

    timeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};
