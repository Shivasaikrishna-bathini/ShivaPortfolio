import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Cloud Support Technician",
    organization: "University of Bridgeport",
    location: "Bridgeport, CT",
    duration: "Jan 2024 – Present",
    description: [
      "Resolved IT support tickets related to software, networking, and hardware issues for students and staff through a centralized service desk system",
      "Managed and updated records in the cloud-connected student information system (Ellucian Colleague DB), supporting account provisioning, course registration, and data consistency checks",
      "Troubleshot connectivity and authentication issues involving cloud storage platforms (Google Drive, OneDrive), VPN access, and virtual desktops",
      "Collaborated with infrastructure and systems teams to escalate and resolve complex database, access control, and application deployment issues",
      "Gained operational experience with ITSM tools and enterprise database platforms in a hybrid cloud environment"
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
      </div>
    </section>
  );
}
