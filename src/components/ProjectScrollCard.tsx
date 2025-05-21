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
    <div className="bg-white dark:bg-black pt-5 lg:pt-10 px-0">
      <div className=" px-4 ">
        <div className="max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0">
          <div className="mb-15 bg-white dark:bg-black flex items-center justify-center">
            <motion.h2
              className="text-3xl-l font-bold text-center"
              {...fadeInUp}
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Sticky sections container */}
          <div className="relative rounded-lg container max-w-7xl px-0">
            {projects.map((item) => (
              <section
                key={item.id}
                style={{
                  top: `${Number(item.id) * 25}px`,
                  width: `${100 - Number(item.id) * 2}%`,
                  marginTop: "10px",
                }}
                className={`${
                  item.bgColor
                } sticky h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden rounded-lg flex items-center justify-center mx-auto transition-all duration-300
             ${
               Number(item.id) == 1
                 ? baseWidth
                 : `${widthDecrement}  ml-[${
                     (100 / sectionCount) * Number(item.id)
                   }%]`
             } 
             `}
              >
                <div className="absolute top-0 bottom-0 w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt="project image"
                    className="rounded-lg"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="absolute top-50% left-0 max-w-[250px] h-fit xl:max-w-xl p-1 lg:p-2 text-center z-20 bg-primary rounded-l-none rounded-t-3xl flex flex-col">
                  <h2 className="text-md md:text-lg xl:text-xl 2xl:text-2xl text-black pl-1">
                    {item.title}
                  </h2>
                </div>
              </section>
            ))}
            <Link
              href="/projects"
              className="relative font-bold text-sm lg:text-md overflow-hidden w-fit px-5 py-2 flex justify-center items-center rounded-lg bg-gray-300/90 hover:bg-white dark:bg-white dark:hover:bg-gray-300/90 animate-bounce text-black shadow-2xl hover:shadow-secondary transition-all"
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
