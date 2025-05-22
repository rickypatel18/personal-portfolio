"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { fadeInUp } from "@/utils/animation";
import { FaGithubSquare, FaLinkedin, FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  const pathName = usePathname();
  const controls = useAnimation();
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
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const animations = [
    { whileHover: { rotate: -5, scale: 1.2 } },
    { whileHover: { skewX: 10, scale: 1.1 } },
    { whileHover: { scale: 1.3, y: -5 } },
    { whileHover: { rotate: 5, scale: 1.1 } },
    { whileHover: { skewY: 8, scale: 1.15 } },
    { whileHover: { scale: 1.25, rotate: -3 } },
  ];

  // Infinite scroll animation
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          x: ["45%", "-70%"],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      }
    };
    sequence();
  }, [controls]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  const backgroundText = "Every Steps Matters ";
  const repeatedText = Array(1).fill(backgroundText).join("");

  const phoneNumber = "+91 8866467330";
  const email = "patelricky184@gmail.com";

  const [copiedItem, setCopiedItem] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = async (
    text: string,
    type: "email" | "phone",
    redirectUrl?: string
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);

      if (redirectUrl) {
        if (redirectUrl.startsWith("mailto:")) {
          window.location.href = redirectUrl;
        } else {
          window.open(redirectUrl, "_blank");
        }
      }
    } catch {
      if (redirectUrl) {
        if (redirectUrl.startsWith("mailto:")) {
          window.location.href = redirectUrl;
        } else {
          window.open(redirectUrl, "_blank");
        }
      }
    }
  };

  const socialLinks = [
    {
      icon: FaGithubSquare,
      href: "https://github.com/rickypatel18",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/ricky-patel-b91727278",
      label: "LinkedIn",
    },
    {
      icon: FaPhoneSquare,
      href: `https://wa.me/${phoneNumber.replace(/\D/g, "")}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="footer-wrapper relative bg-white text-black dark:bg-black dark:text-white my-0 overflow-hidden px-0 cursor-none"
    >
      <div className="px-4">
        <div className="max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0">
          {isInside && (
            <motion.div
              className="fixed top-0 left-0 w-5 h-5 bg-black/30 dark:bg-white/10 backdrop-blur-2xl rounded-full pointer-events-none z-50 cursor-none"
              animate={{ x: cursorPos.x - 15, y: cursorPos.y - 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 50 }}
            />
          )}

          <div className="flex flex-col gap-10 text-center relative z-10">
            <motion.p
              className="text-sm md:text-base font-bold text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Want to work together?
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-5">
                <h3 className="text-xl text-primary font-[montserrat] font-semibold">
                  Location
                </h3>
                <span className="flex flex-col justify-start items-start text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-start">
                  <motion.p
                    className=" text-gray-600 dark:text-gray-300 transition-colors font-[delius] font-bold"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Undach, Antaliya
                  </motion.p>
                  <motion.p
                    className=" text-gray-600 dark:text-gray-300 transition-colors font-[delius] font-bold"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Bilimora
                  </motion.p>
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-5">
                <h3 className="text-xl text-primary font-[montserrat] font-semibold">
                  Profiles{" "}
                </h3>
                <span className="flex flex-col justify-start items-start font-[delius] font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-start">
                  <motion.a
                    href="https://github.com/rickypatel18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600  dark:text-gray-300  transition-colors"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/ricky-patel-b91727278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600  dark:text-gray-300  transition-colors"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    LinkedIn
                  </motion.a>
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-5">
                <h3 className="text-xl text-primary font-[montserrat] font-semibold">
                  Contact
                </h3>
                <span className="flex flex-col justify-start items-start font-[delius] font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                  <motion.a
                    href={`mailto:${email}`}
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(email, "email", `mailto:${email}`);
                    }}
                    className="relative text-gray-600 dark:text-gray-300 transition-colors cursor-pointer"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {email}
                    {copiedItem === "email" && (
                      <motion.span className="absolute -bottom-6 left-0 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                        Copied!
                      </motion.span>
                    )}
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`} // This is the link if JS is disabled or copy fails and user clicks
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default navigation
                      copyToClipboard(
                        phoneNumber, // 1. Text to copy
                        "phone", // 2. Type: "phone"
                        `https://wa.me/${phoneNumber.replace(/\D/g, "")}` // 3. Redirect URL (optional)
                      );
                    }}
                    className="relative text-gray-600  dark:text-gray-300 transition-colors cursor-pointer"
                    {...animations[1 % animations.length]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {phoneNumber}
                    {copiedItem === "phone" && ( // This condition will now work
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -bottom-7 left-1/2 -translate-x-1/2 transform bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </motion.a>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-5"
              {...fadeInUp}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -15, 15, 0],
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      rotate: {
                        type: "tween",
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                      scale: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-3xl p-2 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <Icon className="text-black dark:text-white w-5 h-5" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-ternary/50 opacity-0"
                        animate={{
                          opacity: [0, 1, 0],
                          scale: i * 0.4,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className=" flex flex-wrap justify-center "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 md:space-x-6">
                {menuItems.map((item) => {
                  const isActive =
                    pathName === item.href ||
                    (item.href !== "/" && pathName.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`hover:text-primary transition-colors ${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <div className="text-xs md:text-sm text-gray-600 z-10 font-[delius] font-bold pb-2">
              © {new Date().getFullYear()} Ricky. All rights reserved.
            </div>
          </div>

          {/* Animated background text */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 select-none z-0 overflow-hidden">
            <motion.span
              className="text-[30vh] lg:text-[50vh] font-black  leading-none tracking-tighter opacity-5 pointer-events-none whitespace-nowrap"
              animate={controls}
              initial={{ x: "0%" }}
            >
              {repeatedText}
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
