import { GradientBackground } from "./components/GradientBackground";
import { SideNav } from "./components/SideNav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <GradientBackground />
      <SideNav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
