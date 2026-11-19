
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

import HeroAboutTransition from "@/components/HeroAboutTransition";

export default function Home() {
  return (
    <>
      <HeroAboutTransition
        hero={<Hero />}
        about={<About />}
      />

      <Projects />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
