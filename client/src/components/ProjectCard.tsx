import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Project } from "@shared/projects";
import AnimatedProjectBackground from "./AnimatedProjectBackground";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid={`card-project-${index}`}
    >
      <Link href={`/project/${project.id}`}>
        <Card className="group overflow-hidden h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300">
          {/* Animated Background with zoom effect */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedProjectBackground category={project.category} />
            </motion.div>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/[0.03] group-active:bg-background/[0.08] transition-all duration-300" />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge 
                variant="secondary" 
                className="bg-background/90 backdrop-blur-sm"
                data-testid={`badge-category-${index}`}
              >
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-1" data-testid={`text-title-${index}`}>
              {project.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-description-${index}`}>
              {project.shortDescription}
            </p>

            {/* Tech badges - show up to 5 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 5).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="text-xs"
                  data-testid={`badge-tag-${index}-${i}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTA Button with arrow animation */}
            <Button
              variant="ghost"
              className="w-full justify-between group/btn"
              data-testid={`button-view-case-study-${index}`}
            >
              <span>View Case Study</span>
              <motion.div
                className="inline-block"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
