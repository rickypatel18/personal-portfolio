"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
} from "../../utils/animation";

// Helper function to determine margin-top classes based on index and breakpoints
const getMarginTopClasses = (index: number) => {
  const classes = [];

  const smColumnIndex = index % 2;
  if (smColumnIndex === 0) {
    classes.push("sm:mt-0");
  } else {
    classes.push(`sm:mt-10`);
  }

  const lgColumnIndex = index % 3;
  if (lgColumnIndex === 0) {
    classes.push("lg:mt-0");
  } else if (lgColumnIndex === 1) {
    classes.push(`lg:mt-10`);
  } else {
    classes.push(`lg:mt-20`);
  }

  const xlColumnIndex = index % 4;
  if (xlColumnIndex === 0) {
    classes.push("xl:mt-0");
  } else if (xlColumnIndex === 1) {
    classes.push(`xl:mt-10`);
  } else if (xlColumnIndex === 2) {
    classes.push(`xl:mt-20`);
  } else {
    classes.push(`xl:mt-30`);
  }

  return classes.join(" ");
};

export default function Projects() {
  return (
    <section className="project-wrapper py-12 px-0">
      <div className="bg-white dark:bg-black pb-5 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0">
          <motion.h1
            className="text-page-heading font-bold mb-4 text-center font-[montserrat]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-sm md:text-[16px] xl:text-lg text-secondary mb-24 text-center font-[delius] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent projects. Click on the links to view the
            code or live demo.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5 md:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden ${getMarginTopClasses(
                  index
                )}`}
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <Link href={`/projects/${project.id}`}>
                  <motion.div
                    className="aspect-video bg-gray-200 dark:bg-gray-950 px-2 py-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                  </motion.div>

                  <div className="p-2 md:p-3 lg:p-4">
                    <motion.h3
                      className="text-lg lg:text-xl font-semibold mb-2 font-[montserrat]"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-secondary text-sm lg:text-lg mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-[delius]"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <FaGithub className="h-5 w-5"/>
                        <span>Code</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
