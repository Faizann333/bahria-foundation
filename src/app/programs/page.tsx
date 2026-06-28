"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, FlaskConical, Calculator } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Academic <span className="text-primary">Programs</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We offer comprehensive pre-university programs designed to prepare students for top-tier professional colleges.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Pre-Medical",
              desc: "Intensive biology, chemistry, and physics curriculum preparing students for medical and dental colleges.",
              icon: FlaskConical,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10"
            },
            {
              title: "Pre-Engineering",
              desc: "Rigorous mathematics, physics, and chemistry focusing on analytical skills for engineering universities.",
              icon: Calculator,
              color: "text-blue-500",
              bg: "bg-blue-500/10"
            },
            {
              title: "ICS (Computer Science)",
              desc: "Modern computing, mathematics, and physics shaping the next generation of software engineers.",
              icon: Code,
              color: "text-purple-500",
              bg: "bg-purple-500/10"
            },
            {
              title: "General Science",
              desc: "A flexible combination of sciences and mathematics for diverse career paths.",
              icon: BookOpen,
              color: "text-amber-500",
              bg: "bg-amber-500/10"
            }
          ].map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${program.bg} ${program.color}`}>
                  <Icon size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-3">{program.title}</h2>
                <p className="text-muted-foreground">{program.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
