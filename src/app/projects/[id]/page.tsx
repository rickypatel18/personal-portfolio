"use client";

import React from "react";
import { projects } from "@/contents/projects";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  // It's good practice to handle the case where id might not be a string or might be an array // const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!project) {
    return notFound(); // For Client Components, you can't directly use the notFound()
  }

  return (
    <section className="project-detail-card px-4 py-10 min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={` rounded-lg mb-8`}>
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
          <div className="aspect-video bg-gray-200 dark:bg-gray-950 rounded-lg overflow-hidden lg:col-span-3">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover h-full w-full"
              width={500}
              height={500}
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
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm "
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
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors" // Used items-center
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
          <button className=" animate-bounce">
            <p className="relative overflow-hidden w-fit px-5 py-2 flex justify-center items-center rounded-lg bg-gray-300/90 hover:bg-white dark:bg-white dark:hover:bg-gray-300/90 animate-bounce text-black shadow-2xl hover:shadow-secondary transition-all font-bold text-sm lg:text-md">
              Other images
            </p>
          </button>
          {project.otherImages ? (
            project.otherImages?.map((imageGroup, index) => (
              <div
                key={`image-group-${index}`}
                className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-5"
              >
                {/* Display each image in the group */}
                {Object.entries(imageGroup).map(([key, imageUrl]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="aspect-video bg-gray-200  dark:bg-gray-950 rounded-lg"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-[red]">There is no other images uploaded</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
