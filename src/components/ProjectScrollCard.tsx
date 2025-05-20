"use client";

import { projects } from "@/contents/projects";
import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectScrollCard = () => {
  const sectionCount = 5;
  const baseWidth = "w-full";
  const widthDecrement = "w-5/6";

  return (
    <div className="bg-white dark:bg-black px-0">
      <div className=" px-4 ">
          <div className="max-w-7xl mx-auto  px-0 xl:px-4 2xl:px-0">

      <div className="h-[200px] bg-white dark:bg-black flex items-center justify-center ">
        <motion.h2
          className="text-3xl-l font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Sticky sections container */}
      <div className="relative rounded-2xl container max-w-7xl px-0 ">
        {projects.map((item) => (
          <section
            key={item.key}
            style={{
              top: `${Number(item.key) * 25}px`,
              width: `${100 - Number(item.key) * 2}%`,
            }}
            className={`${
              item.bgColor
            } sticky h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden rounded-xl flex items-center justify-center mx-auto transition-all duration-300
             ${
               Number(item.key) == 1
                 ? baseWidth
                 : `${widthDecrement}  ml-[${
                     (100 / sectionCount) * Number(item.key)
                   }%]`
             } 
             `}
          >
            <div className="absolute top-0 bottom-0 w-full h-full ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt="project image"
                className="rounded-xl"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className=" absolute max-w-[250px] h-fit xl:max-w-2xl p-2 text-center z-20 bg-primary/50 rounded-lg flex flex-col ">
              <h2 className="text-xl xl:text-4xl font-bold text-black ">
                {item.title}
              </h2>
              <p className="text-ternary text-xs md:text-sm xl:text-lg w-full ">{item.description}</p>
            </div>
          </section>
        ))}
        <Link
          href="/projects"
          className="relative overflow-hidden w-fit h-10 lg:h-11 px-6 py-1 lg:px-8 lg:py-4 flex justify-center items-center rounded-lg bg-white hover:bg-gray-300/90  text-black shadow-2xl hover:shadow-secondary transition-all"
        >
          Project Details here
        </Link>
      </div>

    </div>
    </div>
    </div>
  );
};

export default ProjectScrollCard;
