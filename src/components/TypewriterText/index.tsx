"use client";

import Typewriter from "typewriter-effect";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts = [],
  typingSpeed = 100,
}) => {
  return (
    <Typewriter
      options={{
        strings: [...texts],
        autoStart: true,
        loop: true,
        delay: typingSpeed,
        deleteSpeed: 50,
      }}
    />
  );
};
