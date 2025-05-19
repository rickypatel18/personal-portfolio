'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const links = ['Twitter', 'Instagram', 'Youtube', 'Linkedin', 'Patreon', 'Dribbble'];

export default function FooterNew() {
  const [isInside, setIsInside] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (footerRef.current && footerRef.current.contains(e.target as Node)) {
        setCursorPos({ x: e.clientX, y: e.clientY });
        setIsInside(true);
      } else {
        setIsInside(false);
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const animations = [
    { whileHover: { rotate: -5, scale: 1.2 } },
    { whileHover: { skewX: 10, scale: 1.1 } },
    { whileHover: { scale: 1.3, y: -5 } },
    { whileHover: { rotate: 5, scale: 1.1 } },
    { whileHover: { skewY: 8, scale: 1.15 } },
    { whileHover: { scale: 1.25, rotate: -3 } },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white px-10 py-20 overflow-hidden"
    >
      {/* Custom Cursor */}
      {isInside && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50"
          animate={{ x: cursorPos.x - 16, y: cursorPos.y - 16 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        <div>
          <a
            href="mailto:hello@atwww.design"
            className="text-xl border-b border-white block mb-6 hover:text-gray-300"
          >
            hello@atwww.design
          </a>
          <p>Tapia Street, nr. 9</p>
          <p>Timișoara, TM 754832, România</p>
          <a href="#" className="block mt-6 hover:text-gray-300">
            Privacy Policy
          </a>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6 text-xl">
          {links.map((link, index) => (
            <motion.a
              key={link}
              href="#"
              {...animations[index % animations.length]}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-pink-300"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
