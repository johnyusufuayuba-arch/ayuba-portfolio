import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  /** Class applied to the text itself (e.g. the gradient `hero-heading`). */
  textClassName?: string;
  /** Class for the wrapping element (sizing, weight, layout). */
  className?: string;
  style?: React.CSSProperties;
  /** Milliseconds per character. */
  speed?: number;
  /** Delay before typing begins, in ms. */
  startDelay?: number;
}

/**
 * Types `text` out one character at a time with a blinking cursor.
 * An invisible full-length copy reserves the final size so the layout
 * never jumps as the text grows. The full text is exposed to screen
 * readers via aria-label while the animated parts are aria-hidden.
 */
export default function TypewriterText({
  text,
  textClassName,
  className,
  style,
  speed = 85,
  startDelay = 450,
}: TypewriterTextProps) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    let typed = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        typed += 1;
        setCount(typed);
        if (typed >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} style={{ position: 'relative', display: 'block', ...style }}>
      {/* Invisible full copy reserves the final width/height (no layout shift) */}
      <span className={textClassName} aria-hidden="true" style={{ visibility: 'hidden' }}>
        {text}
      </span>
      {/* Visible typed overlay */}
      <span
        aria-label={text}
        style={{ position: 'absolute', left: 0, top: 0, width: '100%' }}
      >
        <span className={textClassName} aria-hidden="true">
          {text.slice(0, count)}
        </span>
        <span
          aria-hidden="true"
          className={`tw-cursor${done ? ' tw-cursor--blink' : ''}`}
        >
          |
        </span>
      </span>
    </span>
  );
}
