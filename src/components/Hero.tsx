"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "../utils/animation";

export default function Hero() {
  return (
    <section className="py-0  px-4 md:px-0">
      <div className="container  max-w-7xl mx-auto  px-0 ">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex-j-i mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              priority
              className="rounded-full mb-4 w-32 h-32 object-cover ring-5 ring-black"
            />
          </motion.div>
          <motion.div
            className="text-page-heading md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Ricky Patel
            </motion.span>
          </motion.div>
          <motion.p
            className="text-subheading text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer | Web Devloper | Frontend Designer
          </motion.p>
          <motion.div
            className="flex-j space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhoneSquare />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex-j flex-col md:flex-row  gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="text-subheading bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="text-subheading inline-block w-full bg-gray-100 hover:bg-gray-300 dark:text-black md:w-auto text-gray-800 px-8 py-3 rounded-lg  dark:hover:bg-gray-300 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
