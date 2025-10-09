import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[400px] perspective-1000"
      data-testid={`card-project-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
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
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className="relative w-full h-full p-6 overflow-hidden backdrop-blur-sm">
          {/* Gradient overlay that appears on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon section */}
          <motion.div
            className="absolute top-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            animate={{
              scale: isHovered ? 0.8 : 1,
              x: isHovered ? -10 : 0,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="h-8 w-8 text-primary-foreground" />
          </motion.div>

          {/* Sparkle effect on hover */}
          <motion.div
            className="absolute top-8 right-8"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-6 w-6 text-accent" />
          </motion.div>

          {/* Title and duration */}
          <motion.div
            className="relative mt-24"
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">{duration}</p>
          </motion.div>

          {/* Description - stagger reveal on hover */}
          <motion.ul
            className="space-y-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
          >
            {description.map((item, i) => (
              <motion.li
                key={i}
                className="text-muted-foreground text-sm flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: isHovered ? 0.1 + i * 0.05 : 0 }}
              >
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tags - slide up reveal on hover */}
          <motion.div
            className="flex flex-wrap gap-2 absolute bottom-6 left-6 right-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
          >
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs" data-testid={`badge-tag-${i}`}>
                {tag}
              </Badge>
            ))}
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
