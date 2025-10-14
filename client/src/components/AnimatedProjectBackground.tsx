import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedProjectBackgroundProps {
  category: string;
  className?: string;
}

export default function AnimatedProjectBackground({ 
  category, 
  className = "" 
}: AnimatedProjectBackgroundProps) {
  
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      
      // Generate particles on client side only
      setParticles([...Array(15)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      })));
      
      const handleResize = () => setViewportWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Research & AI - Neural Network Pattern
  if (category === "Research & AI") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
        
        {/* Neural nodes */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {particles.slice(0, 8).map((p1, i) => {
            const p2 = particles[(i + 1) % 8];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${p1.x}%`}
                y1={`${p1.y}%`}
                x2={`${p2.x}%`}
                y2={`${p2.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  // GenAI & NLP - Flowing Text Pattern
  if (category === "GenAI & NLP") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-chart-2/20 via-primary/10 to-chart-2/20" />
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 font-mono text-sm whitespace-nowrap"
            style={{
              top: `${15 + i * 15}%`,
              left: "-100%",
            }}
            animate={{
              left: ["110%", "-100%"],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {`const ${["legal", "query", "response", "context", "vector", "embed"][i]} = AI.process()`}
          </motion.div>
        ))}
        
        {/* Pulsing circles */}
        {[30, 60].map((pos, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border-2 border-primary/20"
            style={{
              left: `${pos}%`,
              top: "50%",
              width: 100,
              height: 100,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    );
  }

  // Computer Vision - Detection Grid
  if (category === "Computer Vision") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20" />
        
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Scanning detection boxes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-accent/60"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              width: 60,
              height: 60,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.3, 0.6],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-accent" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent" />
          </motion.div>
        ))}
      </div>
    );
  }

  // NLP & LLM - Sanskrit/Ancient Text Pattern
  if (category === "NLP & LLM") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-chart-3/20 via-primary/10 to-chart-3/20" />
        
        {/* Floating symbols */}
        {["ॐ", "अ", "क", "स", "म", "य"].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-primary/20 font-serif"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.4, 0.2],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {char}
          </motion.div>
        ))}
        
        {/* Flowing curves */}
        <svg className="absolute inset-0 w-full h-full opacity-15">
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 0,${50 + i * 30} Q 50,${30 + i * 30} 100,${50 + i * 30}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              vectorEffect="non-scaling-stroke"
              style={{ 
                transform: `scaleX(${viewportWidth / 100})`,
                transformOrigin: "0 0"
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  // ML & Forecasting - Chart/Graph Pattern
  if (category === "ML & Forecasting") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-chart-4/20 via-primary/10 to-chart-4/20" />
        
        {/* Animated line chart */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M 0,80 Q 25,60 50,70 T 100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            vectorEffect="non-scaling-stroke"
            style={{ 
              transform: `scale(${viewportWidth / 100}, 1)`,
              transformOrigin: "0 0"
            }}
          />
        </svg>
        
        {/* Data points */}
        {[20, 40, 60, 80].map((x, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-accent"
            style={{
              left: `${x}%`,
              top: `${40 + Math.sin(i) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Rising bars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bar-${i}`}
            className="absolute bottom-0 bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              width: 8,
            }}
            animate={{
              height: [`${20 + i * 10}%`, `${30 + i * 10}%`, `${20 + i * 10}%`],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    );
  }

  // Default fallback
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
    </div>
  );
}
