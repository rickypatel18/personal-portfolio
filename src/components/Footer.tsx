"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { fadeInUp } from "@/utils/animation";

const Footer = () => {
  const pathName = usePathname();
  const controls = useAnimation();

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
    } catch (err) {
      console.error("Failed to copy: ", err);
      if (redirectUrl) {
        if (redirectUrl.startsWith("mailto:")) {
          window.location.href = redirectUrl;
        } else {
          window.open(redirectUrl, "_blank");
        }
      }
    }
  };

  return (
    <footer className=" relative bg-white dark:bg-black text-white py-10 overflow-hidden px-0 ">
      <div className="px-4">
        <div className="max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0 ">
          <div className="flex flex-col gap-10 text-center relative z-10 ">
            <motion.p
              className="text-sm md:text-base text-gray-400 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Want to work together?
            </motion.p>

            <motion.div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
              <div className="flex flex-col justify-start items-start gap-5">
                <h3 className=" text-xl text-primary">Location</h3>
                <span className="flex flex-col justify-start items-start font-mono text-xl md:text-2xl lg:text-3xl font-thin text-start">
                  <motion.p
                    className=" text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1 }}
                  >
                    Undach, Antaliya
                  </motion.p>
                  <motion.p
                    className=" text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1 }}
                  >
                    Bilimora{" "}
                  </motion.p>
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-5">
                <h3 className=" text-xl text-primary">Profiles </h3>
                <span className="flex flex-col justify-start items-start  font-mono text-xl md:text-2xl lg:text-3xl font-thin  text-start">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1 }}
                  >
                    LinkedIn
                  </motion.a>
                </span>
              </div>
              <div className="flex flex-col justify-start items-start  gap-5">
                <h3 className=" text-xl text-primary">Contact</h3>
                <span className="flex flex-col justify-start items-start font-mono text-xl md:text-2xl lg:text-3xl font-thin">
                  <motion.a
                    href={`mailto:${email}`}
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(email, "email", `mailto:${email}`);
                    }}
                    className="relative text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
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
                    className="relative text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
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
              className="flex-j space-x-5 "
              {...fadeInUp}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhoneSquare />
          </motion.a> */}

              {[FaGithubSquare, FaLinkedin, FaPhoneSquare].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="relative text-3xl p-2 rounded-full bg-white/5 backdrop-blur-sm "
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -15, 15, 0],
                    background: "linear-gradient(45deg, #ff4500, #28e98c)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    rotate: { type: "tween", duration: 0.6, ease: "easeInOut" },
                    scale: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Icon className="text-black dark:text-current w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-ternary/50 opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: i * 0.4,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                </motion.a>
              ))}
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

            <div className="text-xs md:text-sm text-gray-600 z-10">
              © {new Date().getFullYear()} YourName/YourCompany. All rights
              reserved.
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
