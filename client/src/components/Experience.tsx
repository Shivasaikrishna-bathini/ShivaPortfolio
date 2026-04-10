import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Applied Research Engineer",
    organization: "University of Bridgeport",
    location: "Bridgeport, CT",
    description: [
      "Designed and deployed a domain-specific Large Language Model (LLM) supporting academic, administrative, and student-facing services across the University’s internal ecosystem, serving 10K+ daily requests",
      "Built and maintained an end-to-end MLOps and CI/CD pipeline using Kubeflow and Kubernetes, automating data ingestion, model training, validation, deployment, and retraining triggers on an on-prem HPC cluster (8× NVIDIA H200GPUs) and Azure ML based workflows",
      "Designed GPU-aware workload orchestration and priority-based scheduling with Kubeflow Pipelines, balancing interactive inference workloads with background training and evaluation jobs to optimize GPU utilization.",
      "Collaborated with infrastructure and systems teams to escalate and resolve complex database, access control, and application deployment issues",
      "Built data engineering pipelines using Apache Spark (Databricks) for large-scale data preprocessing, transformation, and dataset versioning feeding downstream LLM training and inference pipelines"
    ]
  },
//second experience
  {
    type: "work",
    title: "Software Infrastructure Engineer – Platform & GTM Systems",
    organization: "Vojoy Games Pvt. Ltd",
    location: "Hyderabad, India",
    description: [
      "Built and maintained cloud-based platform services on AWS and Azure to support game backend systems, analytics workloads, and go-to-market (GTM) experimentation across multiple mobile game releases.",
      "Developed data pipelines and backend services to collect, clean, and aggregate gameplay and marketing data, enabling statistical analysis of user acquisition, retention, and ad performance.",
      "Lead experimentation and reporting workflows to support A/B testing of gameplay features and ad strategies, surfacing results to product and GTM teams through dashboards and scheduled reports.",
      "Optimized infrastructure costs through environment standardization, autoscaling policies, and resource right-sizing,balancing performance needs with operational efficiency.",
      "Designed CI/CD pipelines using Azure DevOps and GitHub Actions to automate build, test, and deployment workflows for game services, analytics jobs, and internal tooling, improving release reliability and reducing manual deployment overhead."
    ]
  }
];

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of Bridgeport",
    duration: "Aug 2023 – Dec 2025",
    details: [
      "Focus on Artificial Intelligence, Full-Stack Development, and Cloud Computing",
      "Relevant Coursework: Advanced Machine Learning, Cloud Computing, Software Engineering"
    ]
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    duration: "Jun 2019 – Jun 2023",
    details: [
      "Completed coursework in Data Structures, Algorithms, Operating Systems, and Databases",
      "Academic Projects: Weed Detection system"
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground">
            Professional journey and academic background
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <Briefcase className="h-6 w-6 text-primary" />
              Professional Experience
            </motion.h3>
            <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 hover-elevate" data-testid={`card-experience-${index}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                      <p className="text-muted-foreground">
                        {exp.organization} • {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.duration}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
          //CHANGES
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-6 hover-elevate" data-testid={`card-education-${index}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {edu.duration}
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {edu.details.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
}
