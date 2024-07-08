"use client";

import { useEffect } from "react";

interface UseTypewritterProps {
  text: string;
  speed: number;
  onTyping: (typedText: string) => void;
}

function UseTypewriter({ text, speed = 30, onTyping }: UseTypewritterProps) {
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      onTyping(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return null;
}

export default UseTypewriter;
