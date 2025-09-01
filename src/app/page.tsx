import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import AnimatedSection from './components/AnimatedSection'; // <-- Importamos el contenedor de animación

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="container mx-auto px-4 md:px-12 pt-16">
        <section id="inicio">
          {/* No animamos el header para que se vea de inmediato */}
          <Header />
        </section>
        
        <AnimatedSection>
          <section id="sobre-mi">
            <About />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="experiencia">
            <Experience />
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section id="habilidades">
            <Skills />
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section id="proyectos">
            <Projects />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contacto">
            <Contact />
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}