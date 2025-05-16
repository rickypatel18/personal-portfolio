"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "../../utils/animation";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 md:px-4 2xl:px-0">
      <motion.h1
        className="text-page-heading font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Junior Frontend Developer with hands-on experience gained through
          internships, specializing in building responsive, performant, and
          accessible web applications. Strong foundation in modern JavaScript
          (ES6+), React, and Next.js, with expertise in crafting robust
          solutions through clean, maintainable code. Passionate about UI/UX
          best practices, cross-browser compatibility, and optimizing
          performance. Collaborative team player with a growth mindset, eager to
          contribute to impactful projects while continuously expanding
          technical skills.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>HTML / CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React.js / Next.js</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <ul className="text-secondary space-y-2">
              <li>Java</li>
              <li>Python</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Worked with</h3>
            <ul className="text-secondary space-y-2">
              <li>Tailwind / Bootstrap</li>
              <li>Material UI / Radix UI</li>
              <li>Shadcn UI / Hero UI</li>
              <li>Framer Motion / GSAP</li>
              
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Other</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Figma</li>
              <li>D3 chart</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Haven&apos;t Mastery in technology</li>
              <li>Prisma / MongoDB</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend Internship</h3>
            <p className="text-primary mb-2">Techreale • Jan 2024 - May 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Led development of multiple web applications using Reactjs.
              </li>
              <li>
                Mentored by senior developers and conducted code reviews with
                them.
              </li>
              <li>Work with RESTful APIs. </li>
              <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li>
              <li>Experienced Optimized & improving performance.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-gray-100 dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Computer Engineering</h3>
            <p className="text-primary mb-2">GEC Dahod • 2020 - 2024</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web
              development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
