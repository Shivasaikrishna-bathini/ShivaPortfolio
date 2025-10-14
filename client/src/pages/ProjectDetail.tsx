import { useParams, useLocation } from "wouter";
import { projects } from "@shared/projects";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
// import { ExternalLink, Github } from "lucide-react"; // TODO: Uncomment when adding project links
import AnimatedProjectBackground from "@/components/AnimatedProjectBackground";

export default function ProjectDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => setLocation("/")} data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setLocation("/#projects")}
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.header>

      {/* Hero with Animated Background and Gradient Overlay */}
      <div className="relative h-96 overflow-hidden">
        <AnimatedProjectBackground category={project.category} />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Header Section - Overlapping Hero */}
      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm" data-testid="badge-category">
            {project.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-title">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground" data-testid="text-duration">
            {project.duration}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="outline" data-testid={`badge-tech-${i}`}>
                {tag}
              </Badge>
            ))}
          </div>

          {/* TODO: Uncomment when project links are available */}
          {/* Project Links - Website & GitHub */}
          {/* {(project.websiteUrl || project.githubUrl) && (
            <div className="flex gap-3 pt-6">
              {project.websiteUrl && (
                <Button
                  variant="default"
                  asChild
                  data-testid="button-website"
                >
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  asChild
                  data-testid="button-github"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          )} */}
        </motion.div>
      </div>

      {/* Three Cards: Problem | Approach | Results */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle data-testid="text-problem-title">Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-problem-content">
                  {project.problem}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle data-testid="text-approach-title">Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-approach-content">
                  {project.approach}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle data-testid="text-results-title">Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-results-content">
                  {project.results}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8" data-testid="text-timeline-title">
            Project Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {project.timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {i + 1}
                      </div>
                      <CardTitle className="text-base" data-testid={`text-timeline-phase-${i}`}>
                        {step.phase}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground" data-testid={`text-timeline-description-${i}`}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Connector line */}
                {i < project.timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Architecture Card */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-architecture-title">
                {project.architecture.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.architecture.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    data-testid={`text-architecture-item-${i}`}
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Optional Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center" data-testid={`metric-${i}`}>
                      <div className="text-2xl font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
