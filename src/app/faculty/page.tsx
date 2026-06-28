"use client";

import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. Ahmed Raza", role: "Head of Sciences", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000" },
  { name: "Prof. Sarah Khan", role: "Mathematics", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" },
  { name: "Mr. Usman Ali", role: "Computer Science", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" },
  { name: "Dr. Fatima", role: "Biology", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" },
];

export default function FacultyPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Our <span className="text-primary">Faculty</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Learn from experienced educators dedicated to your academic success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden mb-4 relative aspect-[3/4]">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
