"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Campus", "Events", "Sports", "Labs"];

const galleryItems = [
  // Main cover images
  { id: 1, category: "Events", src: "https://bfc-wah.netlify.app/1.jpg", alt: "Qirat and Azan competition" },
  { id: 2, category: "Events", src: "https://bfc-wah.netlify.app/seerat.jpg", alt: "Seerat-un-Nabi Conference" },
  { id: 3, category: "Campus", src: "https://bfc-wah.netlify.app/alumni.jpg", alt: "BFC's first Alumni" },
  { id: 4, category: "Events", src: "https://bfc-wah.netlify.app/ps%20sol.jpg", alt: "Positive Solutions & BFC" },
  
  // Qirat and Azan competition images
  { id: 5, category: "Events", src: "https://bfc-wah.netlify.app/2.jpg", alt: "Qirat and Azan Event 2" },
  { id: 6, category: "Events", src: "https://bfc-wah.netlify.app/3.jpg", alt: "Qirat and Azan Event 3" },
  { id: 7, category: "Events", src: "https://bfc-wah.netlify.app/4.jpg", alt: "Qirat and Azan Event 4" },
  { id: 8, category: "Events", src: "https://bfc-wah.netlify.app/5.jpg", alt: "Qirat and Azan Event 5" },
  { id: 9, category: "Events", src: "https://bfc-wah.netlify.app/6.jpg", alt: "Qirat and Azan Event 6" },
  { id: 10, category: "Events", src: "https://bfc-wah.netlify.app/7.jpg", alt: "Qirat and Azan Event 7" },
  { id: 11, category: "Events", src: "https://bfc-wah.netlify.app/8.jpg", alt: "Qirat and Azan Event 8" },
  { id: 12, category: "Events", src: "https://bfc-wah.netlify.app/9.jpg", alt: "Qirat and Azan Event 9" },
  { id: 13, category: "Events", src: "https://bfc-wah.netlify.app/10.jpg", alt: "Qirat and Azan Event 10" },

  // Seerat Conference images
  { id: 14, category: "Events", src: "https://bfc-wah.netlify.app/a.jpg", alt: "Seerat Conference a" },
  { id: 15, category: "Events", src: "https://bfc-wah.netlify.app/b.jpg", alt: "Seerat Conference b" },
  { id: 16, category: "Events", src: "https://bfc-wah.netlify.app/c.jpg", alt: "Seerat Conference c" },
  { id: 17, category: "Events", src: "https://bfc-wah.netlify.app/d.jpg", alt: "Seerat Conference d" },
  { id: 18, category: "Events", src: "https://bfc-wah.netlify.app/e.jpg", alt: "Seerat Conference e" },
  { id: 19, category: "Events", src: "https://bfc-wah.netlify.app/f.jpg", alt: "Seerat Conference f" },
  { id: 20, category: "Events", src: "https://bfc-wah.netlify.app/g.jpg", alt: "Seerat Conference g" },
  { id: 21, category: "Events", src: "https://bfc-wah.netlify.app/i.jpg", alt: "Seerat Conference i" },
  { id: 22, category: "Events", src: "https://bfc-wah.netlify.app/j.jpg", alt: "Seerat Conference j" },

  // Alumni images
  { id: 23, category: "Campus", src: "https://bfc-wah.netlify.app/aa.jpg", alt: "Alumni aa" },
  { id: 24, category: "Campus", src: "https://bfc-wah.netlify.app/bb.jpg", alt: "Alumni bb" },
  { id: 25, category: "Campus", src: "https://bfc-wah.netlify.app/cc.jpg", alt: "Alumni cc" },
  { id: 26, category: "Campus", src: "https://bfc-wah.netlify.app/dd.jpg", alt: "Alumni dd" },
  { id: 27, category: "Campus", src: "https://bfc-wah.netlify.app/ee.jpg", alt: "Alumni ee" },
  { id: 28, category: "Campus", src: "https://bfc-wah.netlify.app/ff.jpg", alt: "Alumni ff" },
  { id: 29, category: "Campus", src: "https://bfc-wah.netlify.app/gg.jpg", alt: "Alumni gg" },
  { id: 30, category: "Campus", src: "https://bfc-wah.netlify.app/hh.jpg", alt: "Alumni hh" },
  { id: 31, category: "Campus", src: "https://bfc-wah.netlify.app/ii.jpg", alt: "Alumni ii" },
  { id: 32, category: "Campus", src: "https://bfc-wah.netlify.app/jj.jpg", alt: "Alumni jj" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Our <span className="text-primary">Gallery</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore the vibrant life, modern facilities, and memorable events at Bahria Foundation College Wah.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{item.alt}</h3>
                    <p className="text-white/70 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
