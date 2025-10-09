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
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[400px] relative overflow-hidden"
      data-testid={`card-project-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${isHovered ? 'Hide' : 'Show'} details for ${title}`}
    >
      {/* Bottom layer - Details (revealed on hover) */}
      <Card 
        className={`absolute inset-0 w-full h-full p-6 overflow-y-auto z-0 ${!isHovered ? 'pointer-events-none' : ''}`}
        aria-hidden={!isHovered}
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

      {/* Top layer - Icon and Title (slides up on hover) */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Card className="w-full h-full p-6 flex flex-col justify-center items-center text-center">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
          >
            <ExternalLink className="h-10 w-10 text-primary-foreground" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </Card>
      </motion.div>
    </motion.div>
  );
}
