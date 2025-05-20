'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  children: ReactNode;
}

export default function CustomCursorHero({ name, children }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isInside = sectionRef.current?.contains(e.target as Node);
      setVisible(isInside || false);

      if (isInside) {
        setPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (visible) {
      body.classList.add('cursor-none');
    } else {
      body.classList.remove('cursor-none');
    }

    return () => {
      body.classList.remove('cursor-none');
    };
  }, [visible]);

  return (
    <div ref={sectionRef} className="relative">
      {visible && (
        <motion.div
          className="fixed z-50 pointer-events-none bg-black text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl"
          animate={{ x: pos.x + 20, y: pos.y + 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {name}
        </motion.div>
      )}
      {children}
    </div>
  );
}
