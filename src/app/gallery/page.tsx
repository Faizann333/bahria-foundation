"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Campus", "Events", "Sports", "Labs"];

const galleryItems = [
  { id: 1, category: "Campus", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000", alt: "Main Building" },
  { id: 2, category: "Labs", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000", alt: "Science Lab" },
  { id: 3, category: "Events", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000", alt: "Convocation" },
  { id: 4, category: "Sports", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000", alt: "Football Match" },
  { id: 5, category: "Campus", src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000", alt: "Library" },
  { id: 6, category: "Events", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000", alt: "Debate" },
  { id: 7, category: "Labs", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000", alt: "Computer Lab" },
  { id: 8, category: "Campus", src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000", alt: "Cafeteria" },
  { id: 9, category: "Sports", src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000", alt: "Cricket Ground" },
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
