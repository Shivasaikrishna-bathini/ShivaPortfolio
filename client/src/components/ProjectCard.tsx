import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  duration: string;
  description: string[];
  tags: string[];
  index: number;
}

export default function ProjectCard({
  title,
  duration,
  description,
  tags,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      data-testid={`card-project-${index}`}
    >
      <Card className="p-6 h-full hover-elevate group">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{duration}</p>
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>

        <ul className="space-y-2 mb-6">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs" data-testid={`badge-tag-${i}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
