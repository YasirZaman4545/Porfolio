import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yasir Zaman | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer specializing in React, Tailwind CSS, and JavaScript. Building modern, responsive web applications."
        />
        <meta name="keywords" content="Frontend Developer, React, Tailwind CSS, JavaScript, Web Developer, Portfolio" />
        <meta property="og:title" content="Yasir Zaman | Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Developer specializing in React, Tailwind CSS, and JavaScript."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yasirzaman.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
