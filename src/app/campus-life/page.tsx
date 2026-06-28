"use client";

import { motion } from "framer-motion";
import { CampusLife } from "@/components/sections/CampusLife";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-8 container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-foreground">Campus <span className="text-primary">Life</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Experience a vibrant community where academic excellence meets extracurricular brilliance.
          </p>
        </motion.div>
      </div>
      
      {/* Re-use the beautiful masonry component here */}
      <CampusLife />
    </div>
  );
}
