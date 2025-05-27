"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import Link from "next/link";
import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";

type FallingTextProps = {
  text: string;
  highlightWords?: string[];
  highlightClass?: string;
  trigger?: string;
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
};

const FallingText = ({
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
}: 
  FallingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const [effectStarted, setEffectStarted] = useState(false);

  // const newHTML = words
  //   .map((word) => {
  //     const isHighlighted = highlightWords.some((hw) => word.startsWith(hw));
  //     return `<span
  //       class="inline-block mx-[2px] select-none  ${
  //         isHighlighted
  //           ? "text-primary font-bold border rounded-full py-0 lg:py-1 px-2 lg:px-5"
  //           : "border rounded-full py-0 lg:py-1 px-2 lg:px-5"
  //       }"
  //     >
  //       ${word}
  //     </span>`;
  //   })
  //   .join(" ");

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(" ");

    const newHTML = words
      .map((word) => {
        const isHighlighted = highlightWords.some((hw) => word.startsWith(hw));
        return `<span
      class="inline-block mx-[2px] select-none ${isHighlighted
            ? "btn-gradDark font-bold py-0 lg:py-1 px-2 lg:px-5"
            : "btn-grad py-0 lg:py-1 px-2 lg:px-5"
          }"
    >
      ${word}
    </span>`;
      })
      .join(" ");

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current ?? undefined,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions
    );
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions
    );

    const wordSpans = textRef.current
      ? textRef.current.querySelectorAll("span")
      : [];
    const wordBodies = [...wordSpans].map((elem) => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute";
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2
        }px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2
        }px`;
      elem.style.transform = "none";
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.color = "#101828"; //after fall text color change to this
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
  ]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  return (
    <section className="falling-text-section pt-20 px-0  bg-white dark:bg-black">
      <div className="px-4 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto  px-0 xl:px-4 2xl:px-0">
          <motion.h2
            className="text-3xl-l font-bold mb-12 text-center font-[montserrat]"
            {...fadeInUp}
          >
            Skills
          </motion.h2>
          <div
            ref={containerRef}
            className="relative text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl z-[1] container h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] xl:h-[350px] 3xl:h-[400px]  cursor-pointer text-center py-8 overflow-hidden  max-w-7xl mx-auto px-0 xl:px-4 2xl:px-0  border-b-primary border-l-primary border-r-primary border-t-0 rounded-xl shadow-[0px_-23px_25px_0px_rgba(16,185,129,0.3)_inset,0px_-36px_30px_0px_rgba(16,185,129,0.2)_inset,0px_-79px_40px_0px_rgba(16,185,129,0.2)_inset,0px_2px_1px_rgba(34,197,94,0.4),0px_4px_2px_rgba(34,197,94,0.1),0px_8px_4px_rgba(34,197,94,0.1),0px_16px_8px_rgba(34,197,94,0.1),0px_32px_16px_rgba(34,197,94,0.1)] animate-pulse"
            onClick={trigger === "click" ? handleTrigger : undefined}
            onMouseOver={trigger === "hover" ? handleTrigger : undefined}
          >
            <div
              ref={textRef}
              className="inline-block"
              style={{
                // fontSize,
                lineHeight: 1.4,
              }}
            />
            <div className="absolute top-0 w-full h-full flex justify-center items-center pt-20 sm:pt-10 md:pt-10 lg:pt-15 xl:pt-0 font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-gray-100 dark:text-gray-100/10 -z-30">
              Hover
            </div>

            <div
              className="absolute top-0 left-0 z-0"
              ref={canvasContainerRef}
            />
          </div>
          <div className="mt-5 mb-10">
            <Link href="/about" className=" animate-bounce">
              <p className="relative overflow-hidden w-fit px-5 py-2 flex justify-center items-center rounded-lg bg-gray-300/90 hover:bg-white dark:bg-white dark:hover:bg-gray-300/90 animate-bounce text-black shadow-2xl hover:shadow-secondary transition-all text-sm lg:text-[16px] font-[delius] font-bold">
                More about me
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FallingText;
