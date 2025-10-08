import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { useMemo } from "react";

export default function Hero() {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      animateX: [
        Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      ],
      animateY: [
        Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      ],
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  }, []);

  const shapes = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      width: 100 + Math.random() * 100,
      height: 100 + Math.random() * 100,
      borderRadius: i % 2 === 0 ? '50%' : '10px',
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
      duration: 20 + i * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
        
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute border-2 border-primary/20"
            style={{
              width: shape.width,
              height: shape.height,
              borderRadius: shape.borderRadius,
              left: shape.left,
              top: shape.top,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            Generative AI Engineer
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 relative"
        >
          <div className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter opacity-20 blur-sm select-none pointer-events-none">
            SK
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              SK
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          3+ Years Building Production-Scale LLM Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button size="lg" asChild data-testid="button-view-projects">
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-contact">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <Button variant="ghost" size="icon" asChild data-testid="button-github">
            <a
              href="https://github.com/Shivasaikrishna-bathini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild data-testid="button-linkedin">
            <a
              href="https://www.linkedin.com/in/shiva-sai-krishna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild data-testid="button-email">
            <a href="mailto:shbathin@my.bridgeport.edu">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
