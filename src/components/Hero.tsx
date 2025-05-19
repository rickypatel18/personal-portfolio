"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useRef, MouseEvent, useEffect } from "react";
import CustomCursorHero from "./CustomCursorHero";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function Hero() {
  const profileRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    const createParticleTrail = (e: globalThis.MouseEvent) => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-primary rounded-full";
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;

      particlesRef.current.appendChild(particle);

      animate(
        particle,
        {
          opacity: [0.2, 0],
          scale: [1, 3],
          x: [-20 + Math.random() * 40],
          y: [-20 + Math.random() * 40],
        },
        {
          duration: 1,
          onComplete: () => particle.remove(),
        }
      );
    };

    window.addEventListener("mousemove", createParticleTrail);
    return () => window.removeEventListener("mousemove", createParticleTrail);
  }, []);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!profileRef.current) return;

    const rect = profileRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <CustomCursorHero name="Ricky Patel">
      <section className="py-15 pb-0  px-4 md:px-0 relative overflow-hidden max-h-screen flex items-center">
        {/* Advanced Particle System */}
        <div
          ref={particlesRef}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        />

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container max-w-7xl mx-auto px-0 relative z-10  pb-15 ">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* 3D Parallax Profile Image */}
            <motion.div
              ref={profileRef}
              className="relative w-32 h-32 mx-auto mb-8 cursor-grab active:cursor-grabbing"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={100}
                height={100}
                priority
                className="rounded-full mb-4 w-32 h-32 object-cover ring-5 ring-black"
              />

              <motion.div
                className="absolute inset-0 bg-green-300/50 shadow-lg rounded-full -z-10"
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Neural Network Text Animation */}
            <motion.div
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={item}
            >
              <div className="flex justify-center flex-wrap [text-shadow:0_0_15px_rgba(34,211,238,0.5)]">
                {"Hi, I'm ".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block hover:text-cyan-400 transition-colors text-5xl"
                    animate={{
                      y: [-5, 5, -5],
                      textShadow: [
                        "0 0 10px rgba(34,211,238,0)",
                        "0 0 10px rgba(34,211,238,0.5)",
                        "0 0 10px rgba(34,211,238,0)",
                      ],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <ReactTyped
                  strings={["Ricky Patel", "Web Alchemist", "UI Sorcerer"]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  className="ml-2 text-5xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                />
              </div>
            </motion.div>

            {/* DNA Strand Subheading */}
            <motion.div
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 relative"
              variants={item}
            >
              <span className="relative z-10 px-4 bg-background">
                Crafting digital experiences with React & Next.js
              </span>
              <motion.div
                className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Quantum Social Links */}
            <motion.div
              className="flex justify-center space-x-6 mb-8"
              variants={item}
            >
              {[FaGithub, FaLinkedin, FaPhoneSquare].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="relative text-3xl p-2 rounded-full bg-white/5 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/20 transition-all"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -15, 15, 0],
                    background: "linear-gradient(45deg, #00FFFF, #FF00FF)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    rotate: { type: "tween", duration: 0.6, ease: "easeInOut" },
                    scale: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Icon className="text-current w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/30 opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [1, 1.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Holographic Buttons */}
            <motion.div className="flex justify-center gap-6" variants={item}>
              <Link
                href="/projects"
                className="relative overflow-hidden h-12 flex justify-center items-center px-8 py-4 rounded-full bg-primary/90 hover:bg-primary text-white shadow-2xl hover:shadow-cyan-400/30 transition-all"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 opacity-0 hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute top-[1px] h-[1px] left-0 w-full  bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
              </Link>

              <Link
                href="/resume"
                className="relative overflow-hidden h-12 flex justify-center items-center px-8 py-2 rounded-full bg-gray-200/90 dark:bg-white/10 hover:bg-gray-300/90 dark:hover:bg-white/20 text-gray-800 dark:text-white shadow-2xl hover:shadow-cyan-400/20 transition-all"
              >
                <span className=" z-10">View Resume</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute bottom-[1px] h-[1px] left-0 w-full  bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </CustomCursorHero>
  );
}
