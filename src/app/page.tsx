import Hero from "@/components/Hero";
import Newsletter from "@/components/NewsLetter";
import FallingText from "@/components/FallingText";
import ProjectScrollCard from "@/components/ProjectScrollCard";
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
      <div className="skill-section">
        <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
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
      <Newsletter />
    </div>
  );
}
