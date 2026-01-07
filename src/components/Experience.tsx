import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "BS Computer Science",
    organization: "Riphah International University",
    period: "2021 - 2025",
    description:
      "Completed Bachelor's degree in Computer Science with focus on software development, machine learning, and web technologies.",
  },
  {
    type: "project",
    icon: Award,
    title: "Final Year Project",
    organization: "Smart Helmet Detection & Number Plate Recognition",
    period: "2024 - 2025",
    description:
      "Led the development of an AI-powered system for helmet detection and number plate recognition using computer vision and machine learning techniques.",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Frontend Developer",
    organization: "Freelance & Personal Projects",
    period: "2026 - Present",
    description:
      "Built multiple web applications using React, Tailwind CSS, and modern JavaScript. Focused on creating responsive and user-friendly interfaces.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 z-10">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-lg glow">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-24 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-display font-semibold text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
