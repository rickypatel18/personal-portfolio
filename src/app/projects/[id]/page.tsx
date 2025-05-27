"use client";

import React from "react";
import { projects } from "@/contents/projects";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const router = useRouter();
  // It's good practice to handle the case where id might not be a string or might be an array // const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!project) {
    return notFound(); // For Client Components, you can't directly use the notFound()
  }

  const handleBack = () => {
    router.back();
  };
  return (
    <section className="project-detail-card px-4 py-10 min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={handleBack}
          className="mb-3 lg:mb-5  bg-gray-900/10 dark:bg-gray-50/10 px-2 py-1  text-gray-800 dark:text-gray-200 rounded transition-colors"
        >
          <IoChevronBackCircle className="w-6 h-5 lg:w-10 lg:h-7 text-ternary"/>
        </button>
        <div className={`rounded-lg mb-8`}>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <p className="mt-2 text-gray-500 dark:text-secondary text-sm">
            {project.fullDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="bg-gray-200 dark:bg-gray-950 rounded-lg overflow-hidden lg:col-span-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="object-cover h-auto w-full"
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.githubLink && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Links
                </h2>
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
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-15">
          <button className="animate-bounce">
            <p className="relative overflow-hidden w-fit px-5 py-2 flex justify-center items-center rounded-lg bg-gray-300/90 hover:bg-white dark:bg-white dark:hover:bg-gray-300/90 animate-bounce text-black shadow-2xl hover:shadow-secondary transition-all font-bold text-sm lg:text-md">
              Other images
            </p>
          </button>
          {project.otherImages && project.otherImages.length > 0 ? ( 
            project.otherImages.map((imageGroup, index) => (
              <div
                key={`image-group-${index}`}
                className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-5 mt-5"
              >
                {/* Display each image in the group */}
                {Object.entries(imageGroup).map(([key, imageUrl]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="aspect-video bg-transparent rounded-lg overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl as string}
                      alt={`${project.title} other image ${key}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-red-500 mt-4">
              {" "}
              {/* Nicer styling for no images */}
              There are no other images uploaded for this project.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
