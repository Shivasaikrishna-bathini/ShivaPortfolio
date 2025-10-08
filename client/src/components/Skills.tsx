import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Code } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Generative AI", "Large Language Models", "GPT", "LLaMA", "Falcon",
      "LangChain", "Hugging Face Transformers", "Deep Learning", "Neural Networks",
      "NLP", "Text Generation", "Sentiment Analysis", "Named Entity Recognition",
      "RAG", "Model Fine-Tuning", "Model Optimization"
    ]
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      "AWS", "AWS Bedrock", "Azure", "Azure OpenAI", "Google Cloud",
      "Vertex AI", "MLOps", "Docker", "Kubernetes", "CI/CD",
      "Serverless", "API", "Microservices"
    ]
  },
  {
    title: "Programming & Tools",
    icon: Code,
    skills: [
      "Python", "Java", "R", "TensorFlow", "PyTorch", "Keras",
      "Scikit-learn", "Pandas", "NumPy", "OpenAI API", "SQL",
      "FastAPI", "Git", "GitHub", "Version Control"
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-0 hidden lg:block"
      >
        <Player
          autoplay
          loop
          src="https://lottie.host/b2c0e9e7-b784-48c6-88e6-c5e5c8e4c0c0/8h1FwZLmSo.json"
          style={{ height: "200px", width: "200px" }}
        />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive expertise across the AI/ML stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-skill-category-${categoryIndex}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.02
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-skill-${categoryIndex}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
