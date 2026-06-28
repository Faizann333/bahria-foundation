"use client";

import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, BookOpen, Cpu, Globe, Stethoscope, Microscope, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Pre-Medical",
    description: "Prepare for a career in medicine and healthcare with state-of-the-art labs and expert faculty.",
    icon: Stethoscope,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Pre-Engineering",
    description: "Build a strong foundation in mathematics and physics for top engineering universities.",
    icon: Calculator,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Computer Science",
    description: "Master modern programming, algorithms, and software development in our advanced labs.",
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Commerce",
    description: "Develop strong analytical skills for business, finance, and accounting leadership roles.",
    icon: Globe,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "General Science",
    description: "A versatile program focusing on analytical thinking and scientific inquiry.",
    icon: Microscope,
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Humanities",
    description: "Explore literature, history, and social sciences to understand human society and culture.",
    icon: BookOpen,
    color: "bg-rose-500/10 text-rose-500",
  },
];

export function ProgramsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Academic Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Discover Our <span className="text-primary">Programs</span>
            </h2>
          </motion.div>

          {/* Carousel Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-3"
          >
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <div className="group relative bg-background border border-border/50 p-8 rounded-2xl h-full shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${program.color}`}>
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed relative z-10 flex-1 mb-8">
                      {program.description}
                    </p>
                    
                    <div className="relative z-10 mt-auto">
                      <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary font-semibold group/btn">
                        Learn More 
                        <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
