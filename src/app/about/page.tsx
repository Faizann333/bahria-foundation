"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-luminosity bg-cover bg-center" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About <span className="text-accent">BFC Wah</span></h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
              Discover our legacy, meet our leadership, and explore the vision that drives our commitment to academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-10 rounded-3xl border border-border/50 hover:border-primary/20 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide high-quality, holistic education that nurtures intellectual curiosity, critical thinking, and moral integrity. We strive to empower students with the knowledge and skills necessary to become responsible global citizens and future leaders.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-10 rounded-3xl border border-border/50 hover:border-accent/20 transition-all"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <BookOpen size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a premier institution recognized for academic excellence, innovative teaching methodologies, and character building, creating an environment where every student can achieve their maximum potential and contribute meaningfully to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-background rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-border/50">
            <div className="md:w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-2">Message from the Principal</h2>
              <p className="text-primary font-medium mb-8">Dr. Muhammad Ahmad</p>
              
              <div className="relative">
                <p className="text-muted-foreground leading-relaxed text-lg italic relative z-10">
                  "Welcome to Bahria Foundation College Wah. We believe that education is not merely the accumulation of facts, but the preparation of life itself. Our dedicated faculty ensures that every student who walks through our doors is given the personal attention and academic rigor they need to succeed in an ever-changing world. We don't just produce graduates; we shape future innovators."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Journey</h2>
            <p className="text-muted-foreground mt-4 text-lg">A legacy of educational excellence</p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2">
            {[
              { year: "1998", title: "Foundation Established", desc: "BFC Wah was established with a vision to provide quality education." },
              { year: "2005", title: "Campus Expansion", desc: "Added modern science and computer laboratories to the facility." },
              { year: "2012", title: "Excellence Award", desc: "Recognized as the top-performing college in the region." },
              { year: "2023", title: "Digital Transformation", desc: "Implemented smart classrooms and a comprehensive digital curriculum." },
            ].map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 pl-10 relative"
              >
                <div className="absolute w-6 h-6 bg-accent rounded-full -left-[13px] top-1 border-4 border-background" />
                <h3 className="text-2xl font-bold text-primary mb-1">{item.year}</h3>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
