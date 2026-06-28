"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const lifeImages = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    title: "Annual Sports Day",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    title: "Science Fair 2025",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    title: "Graduation Ceremony",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop",
    title: "Debate Competition",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export function CampusLife() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
                Beyond Academics
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Vibrant <span className="text-primary">Campus Life</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="rounded-full px-6 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              View Full Gallery 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {lifeImages.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.colSpan} ${img.rowSpan} min-h-[250px]`}
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                <div className="w-10 h-1 bg-accent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
