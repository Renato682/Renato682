import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { Journey } from "@/components/journey";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="overflow-hidden">
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
