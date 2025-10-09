import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

// TODO: Update your project cards - Edit title, duration, description, tags, and optionally add link property
// Example with link: { title: "...", duration: "...", description: [...], tags: [...], link: "https://github.com/..." }
const projects = [
  {
    title: "Personal Attorney – Legal RAG Assistant",
    duration: "Apr 2024 – Nov 2024",
    description: [
      "Built a Retrieval-Augmented Generation (RAG) system to provide state-specific DMV/legal information, reducing expensive LLM retraining costs",
      "Implemented with ChromaDB, LangChain, FastAPI, DeepSeek 8B (LoRA fine-tuning), enabling scalable updates without retraining",
      "Delivered practical support for immigrants navigating complex legal frameworks"
    ],
    tags: ["RAG", "LangChain", "ChromaDB", "FastAPI", "LoRA", "DeepSeek 8B"]
  },
  {
    title: "SmartMed AI – Pill Detection App",
    duration: "Jan 2025 – Aug 2025",
    description: [
      "Developed a computer vision pipeline using YOLO (v5–v12), multi-scale detection, attention modules, and frame-to-frame tracking to handle overlapping pills",
      "Deployed solution for pharmacies, improving operational accuracy and reliability in pill recognition tasks",
      "Tech Stack: PyTorch, OpenCV, ResNet, FastAPI, AWS"
    ],
    tags: ["Computer Vision", "YOLO", "PyTorch", "OpenCV", "AWS", "FastAPI"]
  },
  {
    title: "Cognitive HOI Reasoning – Research Project",
    duration: "Apr 2023 – Mar 2024",
    description: [
      "Investigated human-object interaction models on Bongard-HOI and HAKE datasets, identifying reasoning gaps between synthetic and real-world image understanding",
      "Applied DVRL and Componential Analysis, raising model accuracy from 55% to 80%",
      "Contributed novel insights into bridging cognitive paradigms in computer vision"
    ],
    tags: ["Research", "Computer Vision", "DVRL", "Deep Learning", "PyTorch"]
  },
  {
    title: "Time-Series Forecasting – Stock Market Analysis",
    duration: "Sep 2025 – Running",
    description: [
      "Designed forecasting models for volatile financial time-series data",
      "Compared traditional ARIMA/SARIMA with advanced methods like Meta's Prophet and XGBoost ensembles",
      "Improved accuracy in predicting market fluctuations under high volatility conditions"
    ],
    tags: ["Time-Series", "ARIMA", "Prophet", "XGBoost", "Python", "Forecasting"]
  },
  {
    title: "Weed Detection System",
    duration: "Academic Project",
    description: [
      "Developed an automated weed detection system using deep learning for agricultural applications",
      "Implemented computer vision techniques to identify and classify weed species in crop fields",
      "Delivered solution to improve farming efficiency and reduce manual labor"
    ],
    tags: ["Computer Vision", "Deep Learning", "Agriculture", "Classification"]
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Applied AI/ML solutions across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
