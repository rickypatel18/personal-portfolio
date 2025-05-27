import Hero from "@/components/Hero";
import ProjectScrollCard from "@/components/ProjectScrollCard";
import FallingText from "@/components/FallingText";

export default function Home() {
  return (
    <section className="main-layout-page z-70">
      <Hero />
      <ProjectScrollCard />
      <div className="skill-component-section">
        <FallingText
          text={`HTML Tailwind D3chart Motion Bootstrap Next Figma Prisma GSAP CSS Git React MongoDB Hero-UI JavaScript Material-UI TypeScript Shadcn-UI GitHub Radix-UI.`}
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
        />
      </div>
    </section>
  );
}
