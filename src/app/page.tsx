import Hero from "@/components/Hero";
import FallingText from "@/components/FallingText";
import ProjectScrollCard from "@/components/ProjectScrollCard";
// import { Suspense } from "react";
// import Loading from "@/components/Loading";

export default function Home() {
  return (
    <section className="main-layout-page z-70">
      <Hero />
      {/* <Suspense fallback={<Loading/>}>
      </Suspense> */}
      <ProjectScrollCard />
      <div className="skill-component-section">
        <FallingText
          text={`HTML Tailwind D3chart Motion Bootstrap Next Figma Prisma GSAP CSS Git React MongoDB Hero-UI JavaScript Java Material-UI TypeScript Python Shadcn-UI GitHub Radix-UI.`}
          highlightWords={[
            "React",
            "Next",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "GitHub",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          mouseConstraintStiffness={0.9}
          // fontSize="2rem"
        />
      </div>
    </section>
  );
}
