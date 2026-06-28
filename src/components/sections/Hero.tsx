"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import gsap from "gsap";
import { HeroParticles } from "./HeroParticles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary"
    >
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
      
      {/* Three.js Particles */}
      <HeroParticles />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium tracking-wide uppercase">
            Excellence in Education
          </div>
          
          <h1 
            ref={headingRef} 
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Shape Your Future at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#ffdf6b] to-accent">
              Bahria Foundation
            </span>
          </h1>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A premier institution dedicated to academic excellence, innovative learning, 
            and character building. Discover a campus that inspires and empowers.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-14 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14 border-primary-foreground/30 text-white bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">
              Explore Programs <BookOpen className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-primary-foreground/10"
        >
          {[
            { label: "Years of Excellence", value: "25+" },
            { label: "Enrolled Students", value: "3,000+" },
            { label: "Expert Faculty", value: "150+" },
            { label: "Graduation Rate", value: "98%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
