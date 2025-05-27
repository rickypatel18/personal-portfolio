"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NAVBAR_THRESHOLD = 70;

export default function Navbar() {
  const pathName = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY < lastScrollY ||
        currentScrollY <= NAVBAR_THRESHOLD / 2
      ) {
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > NAVBAR_THRESHOLD
      ) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY < 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 1 },
    visible: { y: "0%", opacity: 1 },
  };

  return (
    <motion.nav
      className="navbar-wrapper w-full fixed top-3 left-0 z-50"
      variants={navbarVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.9, ease: "backIn" }}
    >
      <div className="w-full xl:container mx-auto px-4 sm:px-4 md:px-4">
        <div className="rounded-xl max-w-7xl mx-auto backdrop-blur-xs bg-gray-300/30 dark:bg-slate-800/60 my-3 m-0">
          <div className="flex items-center justify-between h-16 px-4">
            <Link href="/" className="text-2xl font-bold text-primary font-[montserrat]">
              Devfolio™
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => {
                const isActive =
                  pathName === item.href ||
                  (item.href !== "/" && pathName.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors hover:text-primary dark:hover:text-primary ${isActive
                        ? "font-semibold text-primary"
                        : "text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-950 transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                title={
                  theme === "dark"
                    ? "Activate Light Mode"
                    : "Activate Dark Mode"
                }
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-700" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {/* Wrapper for mobile button */}
              <motion.button
                onClick={toggleTheme}
                className=" p-1 sm:p-2 mr-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-950 transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                title={
                  theme === "dark"
                    ? "Activate Light Mode"
                    : "Activate Dark Mode"
                }
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-600" />
                )}
              </motion.button>

              <motion.button
                className="p-1 sm:p-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-950 transition-colors"
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {/* Tailwind's recommended mobile menu padding */}
                  {menuItems.map((item, index) => {
                    const isActive =
                      pathName === item.href ||
                      (item.href !== "/" && pathName.startsWith(item.href));

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, ease: "easeOut" }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium hover:text-primary dark:hover:text-primary hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive
                              ? "font-semibold text-primary bg-gray-300 dark:bg-gray-700"
                              : "text-gray-700 dark:text-gray-300"
                            }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
