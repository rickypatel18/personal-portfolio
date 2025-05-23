"use client";

import Link from "next/link";
import ContactForm from "./ContactForm";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const email = "patelricky184@gmail.com";
  const controls = useAnimation();

  const barVariants = {
    initial: { scaleY: 0 },
    hover: {
      scaleY: 1,
      transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const backgroundText = "Connect";
  const repeatedText = Array(1).fill(backgroundText).join("");
  return (
    <section className="contact-wrapper relative bg-white dark:bg-black text-black dark:text-white pt-10 md:pt-12 overflow-hidden mx-4">
      <aside className="container mx-auto flex flex-col gap-5 lg:gap-6 px-0 text-center relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tighter break-all font-[montserrat]"
        >
          Get in Touch
        </motion.div>

        <motion.div
          className="relative inline-block group"
          initial="initial"
          whileHover="hover"
        >
          <Link
            href={`mailto:${email.toLowerCase()}`}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tighter break-all relative z-10 font-[delius] font-bold"
            aria-label={`Email ${email}`}
          >
            <>
              {email.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial="initial"
                  animate="animate"
                  variants={textVariants}
                  className="inline-block relative z-[1]" // Ensure text is above the custom bg
                >
                  {char}
                </motion.span>
              ))}

              <motion.div
                className="absolute top-2 md:top-3 lg:top-4 xl:top-6 left-0 right-0 w-full h-[85%] md:h-[70%] bg-primary mix-blend-hard-light"
                style={{ transformOrigin: "bottom" }}
                variants={barVariants}
                aria-hidden="true"
              />
            </>
          </Link>
        </motion.div>
      </aside>

      {/* Animated background text */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 select-none z-0 overflow-hidden">
        <motion.span
          className="text-[10vh] md:text-[20vh] lg:text-[25vh] xl:text-[30vh] 2xl:text-[40vh] font-black leading-none tracking-tighter opacity-5 pointer-events-none whitespace-nowrap"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {repeatedText}
        </motion.span>
      </div>
      <section className="contact-form-wrapper relative z-20 mt-2 md:mt-5 lg:mt-10">
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
