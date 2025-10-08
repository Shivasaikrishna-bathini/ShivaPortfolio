import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[400px] perspective-1000"
      data-testid={`card-project-${index}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${isFlipped ? 'Hide' : 'Show'} details for ${title}`}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="absolute w-full h-full p-6 backface-hidden flex flex-col justify-center items-center text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
          >
            <ExternalLink className="h-10 w-10 text-background" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </Card>

        <Card 
          className="absolute w-full h-full p-6 backface-hidden overflow-y-auto"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold mb-4 text-primary">
            {title}
          </h3>
          
          <ul className="space-y-2 mb-4">
            {description.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs" data-testid={`badge-tag-${i}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
