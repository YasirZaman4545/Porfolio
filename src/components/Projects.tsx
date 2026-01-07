import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Talghar Website",
    description:
      "A comprehensive website built with modern frontend technologies and a robust PHP backend. Features include dashboard management and live deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    live: "https://talghar.com/",
  },
  {
    title: "Smart Helmet Detection & Number Plate Recognition",
    description:
      "Final Year Project focusing on road safety using Machine Learning and Computer Vision. Includes dataset collection, preprocessing, annotation, and model training.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tags: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
    github: "#",
    live: "#",
  },
  {
    title: "PastApp - Notes Application",
    description:
      "A React-based notes application for quick paste and note management. Built with modern React practices and clean UI design.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/YasirZaman4545/PasteApp",
    live: "https://paste-app-blond-six.vercel.app/",
  },
  {
    title: "Passop - Password Manager",
    description:
      "A secure password manager application built with React. Features include password generation, secure storage, and easy management.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    tags: ["React", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/YasirZaman4545/passop",
    live: "https://passop-iota.vercel.app/",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gradient-bg" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
