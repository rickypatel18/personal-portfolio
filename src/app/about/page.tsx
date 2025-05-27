"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHoverSmall,
  cardHover,
} from "../../utils/animation";
import { education, experience, skillsData } from "@/contents/aboutData";
import { useRef } from "react";

export default function About() {
  const constraintsRef = useRef(null);

  return (
    <section className="about-section container max-w-7xl mx-auto py-12 px-4 md:px-4 2xl:px-0">
      <motion.h1
        className="text-page-heading font-bold mb-8 text-center font-[montserrat]"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="bio-section mb-16" {...fadeInUp}>
        <p className="text-sm lg:text-lg text-secondary max-w-3xl mx-auto text-center font-[delius] font-bold">
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

      {/* Skills Section for small device*/}
      <motion.section
        ref={constraintsRef}
        className="skill-section mb-16 block sm:hidden"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title font-[montserrat]" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg shadow-md "
                variants={fadeInUp}
                {...cardHover}
              >
                {Icon && (
                  <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-primary mb-4" />
                )}
                <h3
                  className={`text-lg lg:text-xl font-semibold mb-2 ${skill.font}`}
                >
                  {skill.tech}
                </h3>
                <ul className="text-secondary space-y-2 text-sm lg:text-lg font-[delius] font-bold">
                  {skill.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Skills Section for large device*/}
      <motion.section
        ref={constraintsRef}
        className="skill-section mb-16 hidden sm:block"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title font-[montserrat]" {...fadeInUp}>
          Skills
        </motion.h2>

        <motion.div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gridAutoRows: "10px", // This controls the row height granularity
          }}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            // Calculate approximate height based on content (adjust as needed)
            const itemHeight = 25 + skill.items.length * 20;

            return (
              <motion.div
                key={skill.id}
                className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg shadow-md"
                style={{
                  gridRowEnd: `span ${Math.round(itemHeight / 10)}`,
                }}
              >
                {Icon && (
                  <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-primary mb-4" />
                )}
                <h3
                  className={`text-lg lg:text-xl font-semibold mb-2 ${skill.font}`}
                >
                  {skill.tech}
                </h3>
                <ul className="text-secondary space-y-2 text-sm lg:text-lg font-[delius] font-bold">
                  {skill.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="experience-section mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 className="section-title font-[montserrat]" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experience.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-2 font-[montserrat]">
                {item.title}
              </h3>
              <p className="text-primary mb-2 font-[delius] font-semibold">
                {item.company}
              </p>
              <ul className="text-secondary text-sm lg:text-lg list-disc list-inside space-y-2">
                {item.ul.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="education-section"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="section-title font-[montserrat]" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2 font-[montserrat]">
                {item.title}
              </h3>
              <p className="text-primary mb-2 font-[delius] font-semibold">
                {item.college}
              </p>
              <ul className="text-secondary text-sm lg:text-lg list-disc list-inside space-y-2">
                {item.ul.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </section>
  );
}
