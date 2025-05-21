import Hero from "@/components/Hero";
import FallingText from "@/components/FallingText";
import ProjectScrollCard from "@/components/ProjectScrollCard";
// import Newsletter from "@/components/NewsLetter";
// import Projects from "@/components/Projects";
// import Blogs from "@/components/Blogs";
// import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="z-70">
      <Hero />
      {/* <Projects /> */}
      {/* <Blogs /> */}
      <ProjectScrollCard />
      <div className="skill-section ">
        <FallingText
          text={`HTML Tailwind D3chart Motion Bootstrap Next Figma Prisma GSAP CSS Git React MongoDB Hero-UI JavaScript Java Material-UI TypeScript Python Shadcn-UI GitHub Radix-UI.`}
          highlightWords={[
            "React",
            "Next",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "GitHub"
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          // fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
      {/* <Newsletter /> */}
    </div>
  );
}
