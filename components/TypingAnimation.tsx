
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 20, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); 
    if (text) {
      let i = 0;
      const timer = setTimeout(() => {
        const intervalId = setInterval(() => {
          if(i < text.length) {
            setDisplayedText(prev => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(intervalId);
          }
        }, speed);
        return () => clearInterval(intervalId);
      }, 100); // Small delay to start animation
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
};

export default TypingAnimation;
