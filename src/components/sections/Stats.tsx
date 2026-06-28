"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookOpen, GraduationCap, Trophy } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

function AnimatedCounter({ from, to, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

const statsData = [
  {
    label: "Active Students",
    value: 3500,
    suffix: "+",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Expert Faculty",
    value: 150,
    suffix: "+",
    icon: GraduationCap,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Academic Programs",
    value: 45,
    suffix: "",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    label: "Awards Won",
    value: 120,
    suffix: "+",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export function Stats() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl ${stat.bg} ${stat.color}`}>
                  <Icon size={36} />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center">
                  <AnimatedCounter from={0} to={stat.value} />
                  <span className={stat.color}>{stat.suffix}</span>
                </div>
                
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
