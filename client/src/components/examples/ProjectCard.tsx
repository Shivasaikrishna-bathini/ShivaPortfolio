import ProjectCard from "../ProjectCard";

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <ProjectCard
        title="Personal Attorney – Legal RAG Assistant"
        duration="Apr 2024 – Nov 2024"
        description={[
          "Built a Retrieval-Augmented Generation (RAG) system to provide state-specific DMV/legal information",
          "Implemented with ChromaDB, LangChain, FastAPI, DeepSeek 8B (LoRA fine-tuning)",
          "Delivered practical support for immigrants navigating complex legal frameworks"
        ]}
        tags={["RAG", "LangChain", "ChromaDB", "FastAPI", "LoRA"]}
        index={0}
      />
    </div>
  );
}
