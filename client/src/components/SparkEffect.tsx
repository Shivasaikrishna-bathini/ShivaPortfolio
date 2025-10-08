import { useEffect, useState, useMemo } from "react";

export default function SparkEffect() {
  const sparks = useMemo(() => {
    return [...Array(30)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = (Math.random() - 0.5) * 200;
      const endY = (Math.random() - 0.5) * 200;
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 5;

      return {
        id: i,
        startX: `${startX}%`,
        startY: `${startY}%`,
        endX: `${endX}px`,
        endY: `${endY}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
      };
    });
  }, []);

  const glowOrbs = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <div className="spark-container">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: spark.startX,
            top: spark.startY,
            // @ts-ignore
            '--tx': spark.endX,
            '--ty': spark.endY,
            animationDuration: spark.duration,
            animationDelay: spark.delay,
          }}
        />
      ))}
      {glowOrbs.map((orb) => (
        <div
          key={orb.id}
          className="glow-orb"
          style={{
            left: orb.left,
            top: orb.top,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
