"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  children: ReactNode;
}

export default function CustomCursorHero({ children }: Props) {
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (visible) {
      body.classList.add("cursor-none");
    } else {
      body.classList.remove("cursor-none");
    }

    return () => {
      body.classList.remove("cursor-none");
    };
  }, [visible]);

  return (
    <section ref={sectionRef} className="custom-cursor-section relative">
      {visible && (
        <motion.div
          className="fixed z-50 pointer-events-none bg-b text-secondary dark:text-white px-4 py-2 rounded-2xl text-sm font-bold"
          animate={{ x: pos.x - 10, y: pos.y - 100 }}
          transition={{ type: "spring", stiffness: 500, damping: 50 }}
        >
          <div className="rounded-full w-5 h-5 bg-black/20 dark:bg-secondary"></div>
        </motion.div>
      )}
      {children}
    </section>
  );
}
