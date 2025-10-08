import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code, Cloud } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: Sparkles },
  { label: "Projects Delivered", value: "5+", icon: Code },
  { label: "Tech Stacks", value: "15+", icon: Cloud },
];

const techStack = [
  "Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain",
  "GPT", "LLaMA", "AWS", "Azure", "Docker", "Kubernetes"
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Generative AI Engineer with over three years of applied experience designing, building, and deploying large language models. Skilled in prompt engineering, model fine-tuning, and leveraging frameworks such as Hugging Face Transformers, TensorFlow, and PyTorch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                  <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Core Technologies</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2" data-testid={`badge-tech-${index}`}>
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
