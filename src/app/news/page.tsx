"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "Admissions Open for Fall 2025",
    date: "Aug 15, 2024",
    category: "Admissions",
    excerpt: "We are excited to announce that admissions for the Fall 2025 semester are now officially open for all pre-university programs.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
  },
  {
    title: "BFC Wah Wins Regional Science Fair",
    date: "Sep 02, 2024",
    category: "Achievements",
    excerpt: "Our brilliant students have secured the first position at the annual regional science and technology fair with their innovative robotics project.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000",
  },
  {
    title: "Annual Sports Gala Scheduled",
    date: "Sep 28, 2024",
    category: "Events",
    excerpt: "Get ready for a week of thrilling competitions and athletic excellence. The Annual Sports Gala kicks off next month.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Latest <span className="text-primary">News</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stay updated with the latest events, achievements, and announcements from Bahria Foundation College Wah.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
                <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
