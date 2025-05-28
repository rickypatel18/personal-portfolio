"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { projects } from "@/contents/projects";
import { notFound, useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { IoChevronBackCircle, IoCloseCircle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

// Animation Variants (assuming these are correctly defined)
const scrollUpRotate = {
  hidden: { opacity: 0, y: 100, rotateX: -45, transformOrigin: "bottom center" },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const simpleFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});


const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const router = useRouter();

  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  // Prepare a flat array of all "other images" for the gallery
  const flatOtherImages = useMemo(() => {
    if (!project) return [];
    return project.otherImages?.flatMap(
      (imageGroup, groupIndex) =>
        Object.entries(imageGroup).map(([key, imageUrl], itemIndex) => ({
          id: `other-image-${project.id}-${groupIndex}-${itemIndex}-${key}`,
          src: imageUrl as string,
          alt: `${project.title} - ${key.charAt(0).toUpperCase() + key.slice(1)} view`,
        }))
    ) || [];
  }, [project]);

  const currentSelectedItem = flatOtherImages.find(img => img.id === selectedImageId);

  const handleNextModalImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!currentSelectedItem || flatOtherImages.length <= 1) return;
    const currentIndex = flatOtherImages.findIndex(img => img.id === currentSelectedItem.id);
    const nextIndex = (currentIndex + 1) % flatOtherImages.length;
    setSelectedImageId(flatOtherImages[nextIndex].id);
  },
    [currentSelectedItem, flatOtherImages, setSelectedImageId]);

  const handlePrevModalImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!currentSelectedItem || flatOtherImages.length <= 1) return;
    const currentIndex = flatOtherImages.findIndex(img => img.id === currentSelectedItem.id);
    const prevIndex = (currentIndex - 1 + flatOtherImages.length) % flatOtherImages.length;
    setSelectedImageId(flatOtherImages[prevIndex].id);
  }, [currentSelectedItem, flatOtherImages, setSelectedImageId]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImageId) return;
      if (event.key === "ArrowRight") handleNextModalImage();
      else if (event.key === "ArrowLeft") handlePrevModalImage();
      else if (event.key === "Escape") setSelectedImageId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageId, handleNextModalImage, handlePrevModalImage, setSelectedImageId]);

  if (!project) {
    return notFound();
  }

  const handleBack = () => {
    router.back();
  };

  const viewportConfig = { once: true, amount: 0.01 };

  return (
    <section className="project-detail-card px-4 py-10 min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={handleBack}
          className="mb-3 lg:mb-5 bg-ternary/30 px-2 py-1 text-gray-800 dark:text-gray-200 rounded transition-colors"
          variants={simpleFadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <IoChevronBackCircle className="w-6 h-5 lg:w-10 lg:h-7" />
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

        {/* LayoutGroup for shared animations between grid and modal */}
        <LayoutGroup>
          <motion.div
            className="mt-12 md:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-white">
              Other images
            </h2>

            {flatOtherImages && flatOtherImages.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {flatOtherImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layoutId={`card-container-${image.id}`}
                    variants={simpleFadeInUp}
                    onClick={() => setSelectedImageId(image.id)}
                    className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl dark:hover:shadow-gray-700/50 transition-shadow"
                  >
                    <motion.img
                      layoutId={`image-${image.id}`}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                There are no other images uploaded for this project.
              </p>
            )}
          </motion.div>

          <AnimatePresence>
            {selectedImageId && currentSelectedItem && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
                onClick={() => setSelectedImageId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  key={currentSelectedItem.id}
                  layoutId={`card-container-${currentSelectedItem.id}`}
                  className="relative bg-gray-200 dark:bg-gray-900 p-2 sm:p-4 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Previous Button */}
                  {flatOtherImages.length > 1 && (
                    <motion.button
                      onClick={handlePrevModalImage}
                      className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 z-20 transition-colors"
                      aria-label="Previous image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaCircleChevronLeft className="w-5 h-5" />
                    </motion.button>
                  )}

                  <motion.img
                    layoutId={`image-${currentSelectedItem.id}`}
                    src={currentSelectedItem.src}
                    alt={currentSelectedItem.alt}
                    className="max-w-full max-h-[calc(90vh-100px)] sm:max-h-[calc(90vh-120px)] object-contain rounded-md"
                  />

                  {/* Next Button */}
                  {flatOtherImages.length > 1 && (
                    <motion.button
                      onClick={handleNextModalImage}
                      className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 z-20 transition-colors"
                      aria-label="Next image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaCircleChevronRight className="w-5 h-5" />
                    </motion.button>
                  )}

                  <motion.button
                    onClick={() => setSelectedImageId(null)}
                    className="absolute top-1 right-1 md:-top-3 md:-right-3 bg-gray-700/50 hover:bg-gray-600/70 text-white rounded-full p-1.5 sm:p-2 leading-none z-20"
                    aria-label="Close modal"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IoCloseCircle className="w-5 h-5" />
                  </motion.button>

                  <motion.h3
                    className="text-base sm:text-lg font-semibold mt-3 text-gray-800 dark:text-gray-100 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                  >
                    {(currentSelectedItem.alt)}
                  </motion.h3>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Page;

