'use client';
import React, { useState, useEffect } from 'react';

interface TypeWriterTextProps {
  text: string;
  speed: number;
}

const TypeWriterText: React.FC<TypeWriterTextProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <div>{displayedText}</div>;
};

export default TypeWriterText;
