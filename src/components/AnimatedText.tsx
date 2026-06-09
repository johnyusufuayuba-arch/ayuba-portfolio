import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words so the browser can only break between words (never mid-word),
  // but keep a single global character counter so the reveal still sweeps
  // smoothly left-to-right across the whole paragraph.
  const words = text.split(' ');
  const totalChars = words.reduce((sum, w) => sum + w.length, 0);
  let charCounter = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('').map((char, ci) => {
          const i = charCounter;
          charCounter += 1;
          return (
            <Char
              key={ci}
              char={char}
              range={[i / totalChars, (i + 1) / totalChars]}
              progress={scrollYProgress}
            />
          );
        });
        return (
          <Fragment key={wi}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>{chars}</span>
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </p>
  );
}
