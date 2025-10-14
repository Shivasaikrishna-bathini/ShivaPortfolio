// Project data types and structure
export interface Project {
  id: string;
  title: string;
  category: string;
  duration: string;
  shortDescription: string;
  tags: string[];
  problem: string;
  approach: string;
  results: string;
  timeline: {
    phase: string;
    description: string;
  }[];
  architecture: {
    title: string;
    items: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  // TODO: Add project links when available
  websiteUrl?: string;  // Live demo or deployed website URL
  githubUrl?: string;   // GitHub repository or source code URL
}

export const projects: Project[] = [
  {
    id: "cognitive-hoi-reasoning",
    title: "Cognitive HOI Reasoning",
    category: "Research & AI",
    duration: "Apr 2023 – Mar 2024",
    shortDescription: "Advanced deep learning models for human-object interaction understanding, bridging gaps between synthetic and real-world cognition.",
    tags: ["Deep Learning", "Computer Vision", "DVRL", "PyTorch", "Research"],
    problem: "Human-object interaction models struggled with significant accuracy gaps between synthetic training data and real-world images, limiting practical deployment in cognitive AI systems.",
    approach: "Developed and fine-tuned deep learning models using Bongard-HOI and HAKE datasets. Integrated DVRL (Data Valuation using Reinforcement Learning), advanced attention mechanisms, and componential analysis. Engineered custom data augmentation pipelines and self-supervised representation learning to improve model generalization.",
    results: "Achieved 80% accuracy (up from 55%) on over 2,000 annotated image pairs. Published novel insights into bridging cognitive paradigms in computer vision, contributing to the research community's understanding of reasoning failures in AI systems.",
    timeline: [
      {
        phase: "Discovery",
        description: "Analyzed existing HOI models and identified critical gaps in synthetic-to-real transfer learning"
      },
      {
        phase: "Design",
        description: "Architected custom data augmentation and attention mechanisms for improved cognition"
      },
      {
        phase: "Implementation",
        description: "Built and trained models with DVRL, componential analysis, and self-supervised learning"
      },
      {
        phase: "Deployment",
        description: "Published research findings and optimized models for real-world cognitive AI applications"
      }
    ],
    architecture: {
      title: "Technical Architecture",
      items: [
        "Deep learning models with custom attention mechanisms",
        "DVRL for data valuation and quality assessment",
        "Self-supervised representation learning pipeline",
        "Custom data augmentation for domain adaptation",
        "Interpretability workflows for reasoning analysis"
      ]
    },
    metrics: [
      { label: "Accuracy Improvement", value: "25%" },
      { label: "Image Pairs Analyzed", value: "2,000+" },
      { label: "Model Performance", value: "80%" }
    ]
  },
  {
    id: "personal-attorney",
    title: "Personal Attorney – Legal RAG Assistant",
    category: "GenAI & NLP",
    duration: "Apr 2024 – Nov 2024",
    shortDescription: "AI-powered legal assistance platform using RAG to deliver state-specific DMV and legal information with 98% accuracy.",
    tags: ["RAG", "LangChain", "ChromaDB", "FastAPI", "DeepSeek", "AWS"],
    problem: "Immigrants and individuals navigating complex legal frameworks lack accessible, accurate, and affordable legal guidance, while traditional LLM retraining for legal updates is prohibitively expensive.",
    approach: "Designed a Retrieval-Augmented Generation (RAG) platform with ChromaDB vector database, LangChain orchestration, and DeepSeek 8B with LoRA fine-tuning. Deployed scalable REST APIs using FastAPI on AWS infrastructure with comprehensive MLOps CI/CD pipelines.",
    results: "Reduced retraining costs by 70% while serving 1,500+ user queries per month. Maintained 98% information retrieval accuracy across 50+ legal workflows. Successfully deployed production-grade system with OpenAPI/Swagger documentation.",
    timeline: [
      {
        phase: "Discovery",
        description: "Researched legal information gaps and identified RAG as optimal solution over full retraining"
      },
      {
        phase: "Design",
        description: "Architected vector database schema, prompt engineering workflows, and API structure"
      },
      {
        phase: "Implementation",
        description: "Built ChromaDB integration, fine-tuned DeepSeek 8B with LoRA, and developed FastAPI services"
      },
      {
        phase: "Deployment",
        description: "Deployed on AWS with CI/CD automation, monitoring, and comprehensive API documentation"
      }
    ],
    architecture: {
      title: "Technical Stack",
      items: [
        "ChromaDB for vector storage and semantic search",
        "LangChain for RAG orchestration and prompt engineering",
        "DeepSeek 8B with LoRA fine-tuning for domain adaptation",
        "FastAPI for high-performance REST API services",
        "AWS (S3, EC2, Lambda) for scalable cloud infrastructure",
        "MLOps CI/CD pipeline for rapid iterations"
      ]
    },
    metrics: [
      { label: "Cost Reduction", value: "70%" },
      { label: "Monthly Queries", value: "1,500+" },
      { label: "Retrieval Accuracy", value: "98%" }
    ]
  },
  {
    id: "smartmed-ai",
    title: "SmartMed AI – Pill Detection",
    category: "Computer Vision",
    duration: "Jan 2025 – May 2025",
    shortDescription: "Advanced computer vision system for accurate pill identification and tracking in pharmacy workflows using YOLO and ResNet.",
    tags: ["YOLO", "Computer Vision", "PyTorch", "ResNet", "FastAPI", "AWS"],
    problem: "Pharmacy operations face accuracy challenges in pill identification, especially with overlapping pills, leading to potential medication errors and reduced operational efficiency.",
    approach: "Engineered a computer vision pipeline using YOLO (v5-v12) with multi-scale detection, ResNet backbone, attention modules, and advanced frame-to-frame tracking. Implemented containerized deployment with Docker, FastAPI, and AWS infrastructure.",
    results: "Achieved 91% test accuracy (up from 76%), improving operational reliability by 25%. Automated processing of 10,000+ images monthly with robust production inference. Integrated model explainability tools (GradCAM, albumentations) for transparency.",
    timeline: [
      {
        phase: "Discovery",
        description: "Analyzed pharmacy workflows and identified pill overlap as primary detection challenge"
      },
      {
        phase: "Design",
        description: "Designed multi-scale YOLO architecture with attention modules and tracking algorithms"
      },
      {
        phase: "Implementation",
        description: "Built computer vision pipeline with ResNet, implemented data augmentation and training loops"
      },
      {
        phase: "Deployment",
        description: "Containerized with Docker, deployed FastAPI services on AWS with monitoring and explainability"
      }
    ],
    architecture: {
      title: "Computer Vision Pipeline",
      items: [
        "YOLO (v5-v12) for object detection with multi-scale processing",
        "ResNet backbone for feature extraction",
        "Attention modules for handling overlapping pills",
        "Frame-to-frame tracking for video streams",
        "Docker containerization for consistent deployment",
        "GradCAM and albumentations for model explainability"
      ]
    },
    metrics: [
      { label: "Accuracy Improvement", value: "15%" },
      { label: "Monthly Processing", value: "10,000+" },
      { label: "Reliability Gain", value: "25%" }
    ]
  },
  {
    id: "sanskrit-transformer",
    title: "Custom Sanskrit Transformer",
    category: "NLP & LLM",
    duration: "Jun 2025 – Aug 2025",
    shortDescription: "High-performance Transformer model for ancient Sanskrit texts with optimized CUDA/TensorRT inference achieving <75ms latency.",
    tags: ["Transformers", "NLP", "CUDA", "TensorRT", "Sanskrit", "NVIDIA"],
    problem: "Ancient Sanskrit Vedic texts require specialized NLP models that can capture linguistic complexity while maintaining production-grade inference performance for real-time applications.",
    approach: "Built and trained a custom Transformer-based NLP model with 25,000-token vocabulary specifically designed for Sanskrit. Optimized using NVIDIA GPUs with CUDA, cuDNN, and TensorRT for kernel-level performance tuning and efficient attention mechanisms.",
    results: "Reduced inference latency by 46% and boosted throughput by 39% over baseline. Delivered robust real-time serving pipeline with <75ms inference times through system profiling, benchmarking, and production-grade optimization.",
    timeline: [
      {
        phase: "Discovery",
        description: "Analyzed Sanskrit linguistic patterns and built custom 25K-token vocabulary from Vedic texts"
      },
      {
        phase: "Design",
        description: "Architected Transformer modifications for Sanskrit complexity and planned GPU optimization strategy"
      },
      {
        phase: "Implementation",
        description: "Trained model with custom tokenization, implemented CUDA kernel optimizations and TensorRT integration"
      },
      {
        phase: "Deployment",
        description: "Profiled and tuned for production with <75ms latency, deployed scalable serving infrastructure"
      }
    ],
    architecture: {
      title: "Performance Optimization Stack",
      items: [
        "Custom Transformer architecture with Sanskrit-specific modifications",
        "25,000-token vocabulary with advanced tokenization",
        "NVIDIA CUDA and cuDNN for GPU acceleration",
        "TensorRT integration for optimized inference",
        "Kernel-level matrix multiplication tuning",
        "System profiling and benchmarking tools"
      ]
    },
    metrics: [
      { label: "Latency Reduction", value: "46%" },
      { label: "Throughput Increase", value: "39%" },
      { label: "Inference Time", value: "<75ms" }
    ]
  },
  {
    id: "time-series-forecasting",
    title: "Time-Series Forecasting – Stock Market",
    category: "ML & Forecasting",
    duration: "Sep 2025 – Running",
    shortDescription: "Advanced forecasting models for volatile financial markets using ARIMA, Prophet, and XGBoost with MLflow tracking.",
    tags: ["Time-Series", "ARIMA", "Prophet", "XGBoost", "MLflow", "Python"],
    problem: "Volatile financial markets require accurate forecasting models that can handle high-frequency data and market swings while providing reliable prediction intervals.",
    approach: "Built comprehensive forecasting solution comparing ARIMA/SARIMA, Meta Prophet, and XGBoost ensembles with engineered lag and window features. Implemented MLflow-tracked pipelines for experiment management and automated forecasting workflows.",
    results: "Increased accuracy from 68% (baseline) to 84%, reduced prediction error by 31% during market volatility. Processing 100,000+ data points monthly with automated model retraining and prediction interval calculations for reliability insights.",
    timeline: [
      {
        phase: "Discovery",
        description: "Analyzed market data patterns, volatility characteristics, and forecasting requirements"
      },
      {
        phase: "Design",
        description: "Designed ensemble approach with ARIMA, Prophet, and XGBoost; planned feature engineering"
      },
      {
        phase: "Implementation",
        description: "Built forecasting models with lag/window features, integrated MLflow for experiment tracking"
      },
      {
        phase: "Deployment",
        description: "Automated forecasting pipeline with model monitoring, prediction intervals, and scalable processing"
      }
    ],
    architecture: {
      title: "Forecasting Pipeline",
      items: [
        "ARIMA/SARIMA for traditional time-series modeling",
        "Meta Prophet for trend and seasonality detection",
        "XGBoost ensembles with engineered features",
        "MLflow for experiment tracking and model versioning",
        "Automated retraining and prediction workflows",
        "Prediction interval calculations for uncertainty quantification"
      ]
    },
    metrics: [
      { label: "Accuracy Improvement", value: "16%" },
      { label: "Error Reduction", value: "31%" },
      { label: "Monthly Data Points", value: "100K+" }
    ]
  }
];
