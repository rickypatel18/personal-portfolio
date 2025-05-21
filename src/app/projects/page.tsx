"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
} from "../../utils/animation";

export default function Projects() {
  return (
    <div className="py-12 px-0">
      <div className="bg-white dark:bg-black pb-5 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0">
          <motion.h1
            className="text-page-heading font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="tex-sm lg:text-md text-secondary mb-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent projects. Click on the links to view the
            code or live demo.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-100  dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden"
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

                  <div className="p-6">
                    <motion.h3
                      className="text-lg lg:text-xl font-semibold mb-2"
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
                          className="py-1px-3 bg-primary/10 text-primary rounded-full text-sm"
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
                        className="flex-i gap-2 text-secondary hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <FaGithub className="h-5 w-5" />
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
    </div>
  );
}
