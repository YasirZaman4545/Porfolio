import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    description: "Riphah International University",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Tailwind, JavaScript",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Computer Vision & AI",
  },
  {
    icon: Sparkles,
    title: "Problem Solver",
    description: "Creative & Analytical",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-3xl opacity-20 scale-105" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6"
              >
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Me
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Passionate about building{" "}
              <span className="gradient-text">beautiful web experiences</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
               Highly motivated and detail-oriented Bachelor of Computer Science with a strong foundation  
                for frontend development. I specialize in creating modern, responsive, and user-friendly 
                web applications using React.js and Tailwind CSS.
              </p>
              <p>
                Beyond frontend development, I have a keen interest in Machine Learning and Computer Vision. 
                My Final Year Project focused on Smart Helmet Detection and Number Plate Recognition, 
                where I worked on dataset collection, preprocessing, and model training.
              </p>
              <p>
                I believe in writing clean, maintainable code and constantly improving my skills 
                to stay updated with the latest technologies and best practices.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <item.icon className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
