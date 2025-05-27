"use client";

import React from "react";
import { projects } from "@/contents/projects";
import { notFound, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// Assuming scrollUpRotate and simpleFadeInUp are defined here or imported
const scrollUpRotate = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -45,
    transformOrigin: "bottom center",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const simpleFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const router = useRouter();

  if (!project) {
    return notFound();
  }

  const handleBack = () => {
    router.back();
  };

  const viewportConfig = { once: true, amount: 0.01 }; // Animate once, when 10% is visible

  return (
    <section className="project-detail-card px-4 py-10 min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Added overflow-x-hidden to prevent horizontal scrollbars during rotation */}
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={handleBack}
          className="mb-3 lg:mb-5 bg-gray-900/10 dark:bg-gray-50/10 px-2 py-1 text-gray-800 dark:text-gray-200 rounded transition-colors"
          variants={simpleFadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <IoChevronBackCircle className="w-6 h-5 lg:w-10 lg:h-7 text-ternary" />
        </motion.button>

        <motion.div
          className={`rounded-lg mb-8`}
          variants={scrollUpRotate}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <p className="mt-2 text-gray-500 dark:text-secondary text-sm">
            {project.fullDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="bg-gray-200 dark:bg-gray-950 rounded-lg overflow-hidden lg:col-span-3"
            variants={scrollUpRotate}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...viewportConfig, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="object-cover h-auto w-full"
            />
          </motion.div>

          <motion.div
            className="space-y-6 lg:col-span-2"
            variants={scrollUpRotate}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">
                Technologies & Tools
              </h2>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer(0.05, 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    variants={simpleFadeInUp}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {project.githubLink && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Links
                </h2>
                {/* The motion.div for links already has an animation, let's keep it simple or adapt */}
                <motion.div className="flex gap-4" variants={simpleFadeInUp}>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5, color: "var(--color-primary)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
        >
          <button className="mb-6">
            <p className="relative overflow-hidden w-fit px-5 py-2 flex justify-center items-center rounded-lg bg-gray-300/90 hover:bg-white dark:bg-white dark:hover:bg-gray-300/90 text-black shadow-2xl hover:shadow-secondary transition-all font-bold text-sm lg:text-md">
              Other images
            </p>
          </button>
          {project.otherImages && project.otherImages.length > 0 ? (
            project.otherImages.map((imageGroup, index) => (
              <motion.div
                key={`image-group-${index}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {Object.entries(imageGroup).map(([key, imageUrl]) => (
                  <motion.div
                    key={key}
                    variants={simpleFadeInUp}
                    className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl as string}
                      alt={`${project.title} other image ${key}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))
          ) : (
            <p className="text-red-500 mt-4">
              There are no other images uploaded for this project.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
