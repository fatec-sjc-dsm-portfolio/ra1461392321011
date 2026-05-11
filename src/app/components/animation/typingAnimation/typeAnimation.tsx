"use client";

import { useEffect, useState, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prevState) => prevState + text.charAt(i));
          setI(i + 1);
        } else {
          clearInterval(typingEffect);
        }
      }, duration);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [duration, i, text, isVisible]);

  return (
    <h1
      ref={ref}
      className={`font-display text-center text-white text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}