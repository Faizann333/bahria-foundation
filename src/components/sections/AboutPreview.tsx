"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "Modern Curriculum & Methodologies",
  "State-of-the-art Laboratories",
  "Highly Qualified Faculty Members",
  "Holistic Student Development",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 rounded-bl-[100px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (Images) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Students walking on campus" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-12 -right-8 z-20 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-background hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="Students studying in library" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-8 -left-8 z-30 bg-white dark:bg-card p-4 rounded-xl shadow-xl flex items-center gap-4 hidden md:flex"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">25+</span>
              </div>
              <div>
                <p className="font-bold text-foreground leading-tight">Years of</p>
                <p className="text-sm text-muted-foreground">Excellence</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content (Text) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:pl-10"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                About Our Institution
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
              Empowering Minds, <br />
              <span className="text-secondary">Transforming Futures.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Bahria Foundation College Wah stands as a beacon of academic excellence and character building. We are committed to providing a holistic educational experience that nurtures intellectual curiosity, fosters creativity, and prepares students for the challenges of tomorrow.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-1 group h-10 px-8 rounded-full"
              >
                  Discover Our Story 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
