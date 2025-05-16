import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Newsletter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div className="z-70">
      <Hero />
      <Projects />
      <Blogs />
      <Newsletter />
    </div>
  );
}
