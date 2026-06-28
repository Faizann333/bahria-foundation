"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, CheckSquare, Edit3, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Application",
    description: "Submit your initial application form online through our portal.",
    icon: Edit3,
    color: "bg-blue-500",
  },
  {
    title: "Document Submission",
    description: "Upload your previous academic records and required identification.",
    icon: FileText,
    color: "bg-indigo-500",
  },
  {
    title: "Verification",
    description: "Our admissions office will review and verify your submitted documents.",
    icon: CheckSquare,
    color: "bg-purple-500",
  },
  {
    title: "Admission Test",
    description: "Take the college entrance examination to assess your academic readiness.",
    icon: Edit3,
    color: "bg-fuchsia-500",
  },
  {
    title: "Interview",
    description: "A brief interview with faculty members for final selection.",
    icon: Users,
    color: "bg-pink-500",
  },
  {
    title: "Enrollment",
    description: "Pay your fees and secure your seat in the upcoming session.",
    icon: GraduationCap,
    color: "bg-rose-500",
  },
];

export function AdmissionsTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const totalScroll = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      
      <div className="pt-24 pb-12 px-6 md:px-12 flex flex-col items-start w-full max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-1 bg-accent rounded-full" />
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Admissions
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your Journey Starts <span className="text-accent">Here</span>
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl text-lg mb-8">
          We've made our admissions process as straightforward as possible. Follow these simple steps to join our prestigious institution.
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 text-base font-semibold">
          Apply Now <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="h-[60vh] md:h-[50vh] flex items-center">
        <div ref={containerRef} className="flex flex-nowrap px-6 md:px-12 gap-8 md:gap-16 pb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title} 
                className="w-[300px] md:w-[400px] flex-shrink-0 relative group"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-20 w-full h-1 bg-primary-foreground/20 z-0">
                    <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl ${step.color} text-white border-4 border-primary`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-accent text-lg">0{index + 1}.</span> 
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
