"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, Library, Users, Target } from "lucide-react";

const features = [
  {
    title: "Experienced Faculty",
    description: "Learn from industry experts and highly qualified professors dedicated to your success.",
    icon: GraduationCap,
    className: "md:col-span-2 md:row-span-2 bg-primary text-primary-foreground",
    iconColor: "text-accent",
  },
  {
    title: "Scholarships",
    description: "Merit and need-based financial aid programs to support your educational journey.",
    icon: Award,
    className: "bg-card text-card-foreground",
    iconColor: "text-secondary",
  },
  {
    title: "Modern Labs",
    description: "State-of-the-art facilities equipped with the latest technology for hands-on learning.",
    icon: Building2,
    className: "bg-card text-card-foreground",
    iconColor: "text-secondary",
  },
  {
    title: "Extensive Library",
    description: "Access thousands of books, journals, and digital resources in our modern library.",
    icon: Library,
    className: "bg-card text-card-foreground",
    iconColor: "text-secondary",
  },
  {
    title: "Career Guidance",
    description: "Dedicated counseling to help you navigate university admissions and career choices.",
    icon: Target,
    className: "md:col-span-2 bg-secondary text-secondary-foreground",
    iconColor: "text-secondary-foreground",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                The BFC Advantage
              </span>
              <span className="w-8 h-1 bg-accent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Why Choose <span className="text-primary">BFC Wah?</span>
            </h2>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 ${feature.className}`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <Icon size={40} className={`${feature.iconColor} mb-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`} />
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="opacity-90 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
